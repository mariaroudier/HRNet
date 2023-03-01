import React from 'react';
import { NavLink } from 'react-router-dom';
import './ListOfEmployees.css'
import Table from '../../Components/Table/Table';



function ListOfEmployees(){
      // const employees = JSON.parse(localStorage.getItem('employees')) || []
      
            // document.getElementById('employee-table').DataTable({
            //       data: employees,
            //       columns: [
            //             { title: 'First Name', data: 'firstName' },
            //             { title: 'Last Name', data: 'lastName' },
            //             { title: 'Start Date', data: 'startDate' },
            //             { title: 'Department', data: 'department' },
            //             { title: 'Date of Birth', data: 'dateOfBirth' },
            //             { title: 'Street', data: 'street' },
            //             { title: 'City', data: 'city' },
            //             { title: 'State', data: 'state' },
            //             { title: 'Zip Code', data: 'zipCode' },
            //       ]
            // });



      return (
            <main>
                   <div id="employee-div" className="container">
                        <h1>Current Employees</h1>
                              <Table />
                        <NavLink to="/">Home</NavLink>
                  </div>
            </main>
      )
}

export default ListOfEmployees;