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
      const [firstName, setFirstName] = useState("")
      const [lastName, setLastName] = useState("")
      const [birthDate, setBirthDate] = useState("")
      const [startDate, setStartDate] = useState("")
      const [street, setStreet] = useState("")
      const [city, setCity] = useState("")
      const [state, setState] = useState("")
      const [zipCode, setZipCode] = useState("")
      const [department, setDepartment] = useState("")


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
            document.getElementById("create-employee").reset();
            setFirstName('')
            setLastName('')
            setBirthDate('')
            setStartDate('')
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
                        <h1>HRnet</h1>
                  </div>
                  <div className="container">
                        <NavLink to="/employee-list">View Current Employees</NavLink>
                        <h2>Create Employee</h2>
                        <form action="#" id="create-employee">
                              <label htmlFor="first-name">First Name</label>
                                    <input type="text" id="first-name" onChange={e => setFirstName(e.target.value)}/>
                              <label htmlFor="last-name">Last Name</label>
                                    <input type="text" id="last-name" onChange={e => setLastName(e.target.value)}/>
                              <label htmlFor="date-of-birth">Date of Birth</label>
                                    <Calendar setDate={setBirthDate} />
                              <label htmlFor="start-date">Start Date</label>
                                    <Calendar setDate={setStartDate}/>
                              <fieldset className="address">
                                    <legend>Address</legend>
                                    <label htmlFor="street">Street</label>
                                          <input id="street" type="text" onChange={e => setStreet(e.target.value)}/>
                                    <label htmlFor="city">City</label>
                                          <input id="city" type="text" onChange={e => setCity(e.target.value)}/>
                                    <label htmlFor="state">State</label>
                                          <CreateSelect options={states} setSelect={setState}/>
                                    <label htmlFor="zip-code">Zip Code</label>
                                          <input id="zip-code" type="number" onChange={e => setZipCode(e.target.value)}/>
                              </fieldset>
                              <label htmlFor="department">Department</label>
                                    <CreateSelect options={departments} setSelect={setDepartment}/>
                              <button className="btn-submit" type="submit" onClick={saveEmployee}>Save</button>
                              {modalState && <ReactModal text="Employee Created !" closeModal={closeModal}/>}
                        </form>
                  </div>
            </main>


      )
}

export default Home;