import React from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import './ListOfEmployees.css'
import TableView from '../../Components/TableView/TableView';



function ListOfEmployees(){

      return (
            <main>
                   <div id="employee-div" className="container">
                        <h1 className='titre' style={{color: 'blue',lineHeight: '2',width: '100%',textAlign: 'center'}}>Current Employees</h1>
                              <TableView />
                        <NavLink className='link' to="/" aria-label="To come back at home page">Home</NavLink>
                  </div>
            </main>
      )
}

export default ListOfEmployees;