import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getMonth, getYear, getDate } from 'date-fns'

import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employeeSlice"
import ReactModal from '@mashka17/react-simple-modal'

import Calendar from '../../Components/Calendar/Calendar'
import CreateSelect from '../../Components/CreateSelect/CreateSelect'
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

      /**
      * @param {*} date - to convert the input birthdate in a good format
      * @returns new state of birthDate
      */

      const toCommitBirthDate = (selectedDate) => {
            let finalMonth = getMonth(selectedDate) + 1
            if(finalMonth < 10) finalMonth = `0${finalMonth}`
            let finalYear = getYear(selectedDate)
            let finalDay = getDate(selectedDate)
            if (finalDay < 10) finalDay = `0${finalDay}`
            const finalDate = `${finalMonth}/${finalDay}/${finalYear}`
            setBirthDate(finalDate)
      }
      /**
      * @param {*} date - to convert the input starthdate in a good format
      * @returns new state of startDate
      */
      const toCommitStartDate = (selectedDate) => {
            let finalMonth = getMonth(selectedDate) + 1
            if(finalMonth < 10) finalMonth = `0${finalMonth}`
            let finalYear = getYear(selectedDate)
            let finalDay = getDate(selectedDate)
            if (finalDay < 10) finalDay = `0${finalDay}`
            const finalDate = `${finalMonth}/${finalDay}/${finalYear}`
            setStartDate(finalDate)
      }

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

      /**
      * To add a new employee in the state and reset oll the states
      */
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
      }

      return (
            <main>
                  <div className="title">
                        <h1 className='titre'>HRnet</h1>
                  </div>
                  <div className="container">
                        <NavLink to="/employee-list">View Current Employees</NavLink>
                        <h2>Create Employee</h2>
                        <form className='form' action="#" style={{width:'50%',display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center' }}>
                              <label htmlFor="first-name">First Name</label>
                                    <input type="text" id="first-name" placeholder="John" required value={firstName} onChange={e => setFirstName(e.target.value)}/>
                              <label htmlFor="last-name">Last Name</label>
                                    <input type="text" id="last-name" placeholder="Walker"required value={lastName} onChange={e => setLastName(e.target.value)}/>
                              <label htmlFor="date-of-birth">Date of Birth</label>
                                    <Calendar toCommitDate={toCommitBirthDate} modalState={modalState} tabindex='0' />
                              <label htmlFor="start-date">Start Date</label>
                                    <Calendar toCommitDate={toCommitStartDate} modalState={modalState} tabindex='0' />
                              <fieldset style={{width:'70%', marginTop:'25px',marginBottom:'15px', display:'flex', flexDirection:'column',alignItems:'center',borderColor:'steelblue',paddingBottom:'20px'}}>
                                    <legend style={{fontWeight:'600',fontSize:'17px',color:'steelblue'}}>Address</legend>
                                    <label htmlFor="street">Street</label>
                                          <input className='set-input' id="street" placeholder="Shepard Blvd" type="text" required value={street} onChange={e => setStreet(e.target.value)}/>
                                    <label htmlFor="city">City</label>
                                          <input  className='set-input' id="city" type="text" placeholder="Columbia"required value={city} onChange={e => setCity(e.target.value)}/>
                                    <label htmlFor="state">State</label>
                                          <CreateSelect options={states} value={state} toCommitSelect={setState} placeholder="Select a state" tabindex='0' />
                                    <label htmlFor="zip-code">Zip Code</label>
                                          <input  className='set-input' id="zip-code" placeholder="00000"type="number" required value={zipCode} onChange={e => setZipCode(e.target.value)}/>
                              </fieldset>
                              <label htmlFor="department">Department</label>
                                    <CreateSelect options={departments} value={department} toCommitSelect={setDepartment} placeholder="Select a department" tabindex='0' />
                              <button type="button" onClick={(e)=> {saveEmployee(e)}} style={{width:'130px', height:'40px', marginTop:'15px',marginBottom:'50px',backgroundColor:'steelblue',border:'none',color:'white',fontSize:'16px',fontWeight:'500'}} aria-label="To save employee">Save</button>
                              {modalState && <ReactModal text="Employee Created !" closeModal={closeModal}/>}
                        </form>
                  </div>
            </main>
      )
}

export default Home;