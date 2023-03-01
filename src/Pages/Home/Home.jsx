import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Calendar from '../../Components/Calendar/Calendar'
import CreateSelect from '../../Components/CreateSelect/CreateSelect'
import { states } from '../../data/statesData'
import { departments } from '../../data/departmentData'
import './Home.css'


function Home(){

      const formSubmit = (e) => {
            e.preventDefault()
            console.log('checking info')
      }


      return (
            <main>
                  <div className="title">
                        <h1>HRnet</h1>
                  </div>
                  <div className="container">
                        <NavLink to="/employee-list">View Current Employees</NavLink>
                        <h2>Create Employee</h2>
                        <form action="#" id="create-employee" onSubmit={formSubmit}>
                              <label htmlFor="first-name">First Name</label>
                                    <input type="text" id="first-name" />
                              <label htmlFor="last-name">Last Name</label>
                                    <input type="text" id="last-name" />
                              <label htmlFor="date-of-birth">Date of Birth</label>
                                    <Calendar />
                              <label htmlFor="start-date">Start Date</label>
                                    <Calendar />
                              <fieldset className="address">
                                    <legend>Address</legend>
                                    <label htmlFor="street">Street</label>
                                          <input id="street" type="text" />
                                    <label htmlFor="city">City</label>
                                          <input id="city" type="text" />
                                    <label htmlFor="state">State</label>
                                          <CreateSelect options={states}/>
                                    <label htmlFor="zip-code">Zip Code</label>
                                          <input id="zip-code" type="number" />
                              </fieldset>
                              <label htmlFor="department">Department</label>
                                    <CreateSelect options={departments}/>
                              <button className="btn-submit" type="submit">Save</button>
                        </form>

                  </div>
                  <div id="confirmation" className="modal">Employee Created!</div>
            </main>


      )
}

export default Home;