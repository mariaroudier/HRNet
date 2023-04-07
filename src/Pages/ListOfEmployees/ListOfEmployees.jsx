import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import './ListOfEmployees.css'
import TableView from '../../Components/TableView/TableView';



function ListOfEmployees(){

      return (
            <main>
                   <div id="employee-div" className="container" style={{padding:"30px"}}>
                        <h1 className='titre'>Current Employees</h1>
                              <TableView />
                        <NavLink to="/">Home</NavLink>
                  </div>
            </main>
      )
}

export default ListOfEmployees;