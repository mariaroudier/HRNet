import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import './ListOfEmployees.css'
import Table from '../../Components/Table/Table';



function ListOfEmployees(){

      return (
            <main>
                   <div id="employee-div" className="container" style={{padding:"30px"}}>
                        <h1>Current Employees</h1>
                              <Table />
                        <NavLink to="/">Home</NavLink>
                  </div>
            </main>
      )
}

export default ListOfEmployees;