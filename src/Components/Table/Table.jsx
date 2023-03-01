import React from 'react';
import { NavLink } from 'react-router-dom';
// import DataTables from 'datatables-plugin-react'

// import {dataTableLabels} from 



function Table(){
      const dataTableLabels = [
            { text: 'First Name', value: 'firstName' },
            { text: 'Last Name', value: 'lastName' },
            { text: 'Date of Birth', value: 'birthdate' },
            { text: 'Start Date', value: 'startDate' },
            { text: 'Street', value: 'street' },
            { text: 'City', value: 'city' },
            { text: 'State', value: 'state' },
            { text: 'Zip Code', value: 'zipCode' },
            { text: 'Department', value: 'department' }
      ]

      return(  ""
            // <DataTables labels="name" data={[1,2,3]}
            // data={[ 
            //     { name: 'Muhammad Rafeh', age: 21, gender: 'male' },
            //     { name: 'Muhammad Akif', age: 22, gender: 'male' },
            //     { name: 'Muhammad Umar', age: 21, gender: 'male' },
            //     { name: 'Amna Shakeel', age: 22, gender: 'female' },
            //     { name: 'Muhammad Ammar', age: 20, gender: 'male' },
            //     { name: 'Muhammad Moiz', age: 13, gender: 'male' }
            // ]} 
      ///>
            // colNames={['name', 'age', 'gender']} //List of Strings
            // colSettings={[
            //   { name: 'name', width: '40%' }, 
            //   { name: 'age', width: '30%' }, 
            //   {name: 'gender', width: '30%'}
            // ]}//List of Objects
            // noOfPages={2} //number
            // backgroundColor={'rgba(23,2,4,0.2)'} //Table Background Color
            // headerLabelStyle={{ color: 'grey', fontSize: 12 }} //Text Style Works
            // />
      )
}

export default Table;