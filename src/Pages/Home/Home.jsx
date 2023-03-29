import React, { useState, useSelector } from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employeeSlice"

import Calendar from '../../Components/Calendar/Calendar'
import CreateSelect from '../../Components/CreateSelect/CreateSelect'
import ReactModal from '@mashka17/react-simple-modal'
import { states } from '../../data/statesData'
import { departments } from '../../data/departmentData'
import './Home.css'


function Home(){

      const dispatch = useDispatch();
      const [ modalState, setModalVisible ] = React.useState(false)
      const [ dateInput , setDateInput] = React.useState(true)

      const [isDepartmentSelected, setIsDepartmentSelected] = useState(false) 
      const [isStateSelected, setIsStateSelected] = useState(false)
      const [deptErr, setDeptErr] = useState("");
      const [stateErr, setStateErr] = useState("");

      const [firstName, setFirstName] = useState("")
      const [lastName, setLastName] = useState("")
      const [birthDate, setBirthDate] = useState(undefined)
      const [startDate, setStartDate] = useState(undefined)
      const [street, setStreet] = useState("")
      const [city, setCity] = useState("")
      const [state, setState] = useState("")
      const [zipCode, setZipCode] = useState("")
      const [department, setDepartment] = useState("")

      const resetDate = (dateInput) => {
            setDateInput(false)
            return dateInput
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

      const saveEmployee = (e) => {
            e.preventDefault()
            if (isStateSelected === false) {
                  setStateErr("err")
            }
            if (isDepartmentSelected === false) {
                  setDeptErr("err")
            }
            if (isStateSelected && isDepartmentSelected) {
                  setIsStateSelected(false);
                  setIsDepartmentSelected(false);
                  setDeptErr("");
                  setStateErr("")
                  dispatch(
                        addEmployee({employee})
                  );
                  setModalVisible(true)
                  setDateInput(false)
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
      }
      const closeModal = () => {
            setModalVisible(false)
            return modalState
      }

      
      return (
            <main>
                  <div className="title">
                        <h1>HRnet</h1>
                  </div>
                  <div className="container">
                        <NavLink to="/employee-list">View Current Employees</NavLink>
                        <h2>Create Employee</h2>
                        <form action="#" id="create-employee">
                              <label htmlFor="first-name">First Name</label>
                                    <input type="text" id="first-name" required value={firstName} onChange={e => setFirstName(e.target.value)}/>
                              <label htmlFor="last-name">Last Name</label>
                                    <input type="text" id="last-name" required value={lastName} onChange={e => setLastName(e.target.value)}/>
                              <label htmlFor="date-of-birth">Date of Birth</label>
                                    <Calendar setDate={setBirthDate} setDateInput={resetDate}/>
                              <label htmlFor="start-date">Start Date</label>
                                    <Calendar setDate={setStartDate}/>
                              <fieldset className="address">
                                    <legend>Address</legend>
                                    <label htmlFor="street">Street</label>
                                          <input id="street" type="text" required value={street} onChange={e => setStreet(e.target.value)}/>
                                    <label htmlFor="city">City</label>
                                          <input id="city" type="text" required value={city} onChange={e => setCity(e.target.value)}/>
                                    <label htmlFor="state">State</label>
                                          <CreateSelect options={states} setSelect={setState} placeholder="Select a state"/>
                                          {stateErr==="err" ? <p className='select-required' id='department-required'>Please select a department</p> : null}
                                    <label htmlFor="zip-code">Zip Code</label>
                                          <input id="zip-code" type="number" required value={zipCode} onChange={e => setZipCode(e.target.value)}/>
                              </fieldset>
                              <label htmlFor="department">Department</label>
                                    <CreateSelect options={departments} setSelect={setDepartment} placeholder="Select a department"/>
                                    {deptErr==="err" ? <p className='select-required' id='state-required'>Please select a state</p> : null} 
                              <button className="btn-submit" type="submit" onClick={(e)=> {saveEmployee(e)}} >Save</button>
                              {modalState && <ReactModal text="Employee Created !" closeModal={closeModal}/>}
                        </form>
                  </div>
            </main>


      )
}

export default Home;