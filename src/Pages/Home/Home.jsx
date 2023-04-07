import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getMonth, getYear, getDate } from 'date-fns'

import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employeeSlice"

import Calendar from '../../Components/Calendar/Calendar'
import CreateSelect from '../../Components/CreateSelect/CreateSelect'
import ReactModal from '@mashka17/react-simple-modal'
import { states } from '../../data/statesData'
import { departments } from '../../data/departmentData'
import './Home.css'


function Home(){
      //States for components
      const [ modalState, setModalVisible ] = useState(false)
      
      const dispatch = useDispatch();
      const [firstName, setFirstName] = useState("")
      const [lastName, setLastName] = useState("")
      const [birthDate, setBirthDate] = useState(undefined)
      const [startDate, setStartDate] = useState(undefined)
      const [street, setStreet] = useState("")
      const [city, setCity] = useState("")
      const [state, setState] = useState("")
      const [zipCode, setZipCode] = useState("")
      const [department, setDepartment] = useState("")

      const toCommitBirthDate = (selectedDate) => {
            if(selectedDate){
                  const finalMonth = getMonth(selectedDate) + 1
                  const finalYear = getYear(selectedDate)
                  const finalDay = getDate(selectedDate)
                  const finalDate = `${finalMonth}/${finalDay}/${finalYear}`
                  setBirthDate(finalDate)
            }
      }

      const toCommitStartDate = (selectedDate) => {
            if(selectedDate){
                  const finalMonth = getMonth(selectedDate) + 1
                  const finalYear = getYear(selectedDate)
                  const finalDay = getDate(selectedDate)
                  const finalDate = `${finalMonth}/${finalDay}/${finalYear}`
                  setStartDate(finalDate)
            }
      }

      // const toCommitState = (selectedOption) => {
      //       setState(selectedOption)
      // }

      // const toCommitDepartment = (selectedOption) => {
      //       setDepartment(selectedOption)
      // }


      const employee = {
            'firstName': firstName,
            'lastName': lastName ,
            'startDate': startDate,
            'department': department,
            'birthDate': birthDate,
            'street': street,
            'city': city,
            'state': state,
            'zipCode': zipCode
      }

      const saveEmployee = (e) => {
            e.preventDefault()
                  dispatch(
                        addEmployee({employee})
                  );
                  setModalVisible(true)

                  setFirstName('')
                  setLastName('')
                  setBirthDate(undefined)
                  setStartDate(undefined)
                  setStreet('')
                  setCity('')
                  setState('')
                  setZipCode('')
                  setDepartment('')
      }

      const closeModal = () => {
            setModalVisible(false)
            return modalState
      }

      return (
            <main>
                  <div className="title">
                        <h1 className='titre'>HRnet</h1>
                  </div>
                  <div className="container">
                        <NavLink to="/employee-list">View Current Employees</NavLink>
                        <h2>Create Employee</h2>
                        <form action="#" id="create-employee" style={{ 
                              width:'50%',
                              display: 'flex', 
                              flexDirection: 'column',
                              alignItems: 'center',
                              textAlign: 'center', }}>
                              <label htmlFor="first-name">First Name</label>
                                    <input type="text" id="first-name" placeholder="John" required value={firstName} onChange={e => setFirstName(e.target.value)}/>
                              <label htmlFor="last-name">Last Name</label>
                                    <input type="text" id="last-name" placeholder="Walker"required value={lastName} onChange={e => setLastName(e.target.value)}/>
                              <label htmlFor="date-of-birth">Date of Birth</label>
                                    <Calendar toCommitDate={toCommitBirthDate} reset={reset}/>
                              <label htmlFor="start-date">Start Date</label>
                                    <Calendar toCommitDate={toCommitStartDate} reset={reset}/>
                              <fieldset className="address">
                                    <legend>Address</legend>
                                    <label htmlFor="street">Street</label>
                                          <input className='set-input' id="street" placeholder="Shepard Blvd" type="text" required value={street} onChange={e => setStreet(e.target.value)}/>
                                    <label htmlFor="city">City</label>
                                          <input  className='set-input' id="city" type="text" placeholder="Columbia"required value={city} onChange={e => setCity(e.target.value)}/>
                                    <label htmlFor="state">State</label>
                                          <CreateSelect options={states} value={state} toCommitSelect={setState} placeholder="Select a state"/>
                                    <label htmlFor="zip-code">Zip Code</label>
                                          <input  className='set-input' id="zip-code" placeholder="00000"type="number" required value={zipCode} onChange={e => setZipCode(e.target.value)}/>
                              </fieldset>
                              <label htmlFor="department">Department</label>
                                    <CreateSelect options={departments} value={department} toCommitSelect={setDepartment} placeholder="Select a department"/>
                              <button className="btn-submit" type="submit" onClick={(e)=> {saveEmployee(e)}} >Save</button>
                              {modalState && <ReactModal text="Employee Created !" closeModal={closeModal}/>}
                        </form>
                  </div>
            </main>
      )
}

export default Home;