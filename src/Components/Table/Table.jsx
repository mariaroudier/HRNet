import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import { useSort } from '@table-library/react-table-library/sort';

// import { DocumentationSee } from '../documentation';
// import { nodes } from '../data';


function Table(){

      const nodes = [
            {
                  firstName: 'Lars',
                  lastName: 'Domenico',
                  birthdate: '1/15/2021',
                  startDate: '10/18/2021',
                  street: '3 Eagan Court',
                  city: 'San Bernardino',
                  state: 'California',
                  zipCode: '92415',
                  department: 'Services'
              },
              {
                  firstName: 'King',
                  lastName: 'Cartledge',
                  birthdate: '5/11/2021',
                  startDate: '1/18/2021',
                  street: '5 Del Sol Point',
                  city: 'Richmond',
                  state: 'Virginia',
                  zipCode: '23289',
                  department: 'Sales'
              },
              {
                  firstName: 'Devy',
                  lastName: 'Crampton',
                  birthdate: '5/26/2021',
                  startDate: '3/5/2021',
                  street: '84 Sheridan Road',
                  city: 'Lubbock',
                  state: 'Texas',
                  zipCode: '79452',
                  department: 'Sales'
              },
      ]
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

      const [search, setSearch] = React.useState('');
      const key = 'Sort';
      const data = { nodes };
      const theme = useTheme(getTheme());

       const COLUMNS = [
            { label: 'First Name', renderCell: (item) => item.firstName, sort: { sortKey: 'FIRSTNAME' } },
            { label: 'Last Name', renderCell: (item) => item.lastName, sort: { sortKey: 'LASTNAME' } },
            { label: 'Start Date', renderCell: (item) => item.startDate, sort: { sortKey: 'STARTDATE' } },
            { label: 'Department', renderCell: (item) => item.department, sort: { sortKey: 'DEPARTMENT' } },
            { label: 'Date of Birth', renderCell: (item) => item.birthdate, sort: { sortKey: 'BIRTHDATE' } },
            { label: 'Street', renderCell: (item) => item.street, sort: { sortKey: 'STREET' } },
            { label: 'City', renderCell: (item) => item.city, sort: { sortKey: 'CITY' } },
            { label: 'State', renderCell: (item) => item.state, sort: { sortKey: 'STATE' } },
            { label: 'Zip Code', renderCell: (item) => item.zipCode, sort: { sortKey: 'ZIPCODE' } },
      ];
      const sort = useSort(
            data,
      {
            onChange: onSortChange,
      },
      {
            sortFns: {
            FIRSTNAME: (array) => array.sort((a, b) => a.firstName.localeCompare(b.firstName)),
            STARTDATE: (array) => array.sort((a, b) => a.startDate - b.startDate),
            LASTNAME: (array) => array.sort((a, b) => a.lastName.localeCompare(b.lastName)),
            DEPARTMENT: (array) => array.sort((a, b) => a.department.localeCompare(b.department)),
            BIRTHTDATE: (array) => array.sort((a, b) => a.birthdate - b.birthdate),
            STREET: (array) => array.sort((a, b) => a.street.localeCompare(b.street)),
            CITY: (array) => array.sort((a, b) => a.city.localeCompare(b.city)),
            STATE: (array) => array.sort((a, b) => a.state.localeCompare(b.state)),
            ZIPCODE: (array) => array.sort((a, b) => a.zipCode.localeCompare(b.zipCode)),
            },
      },);

      function onSortChange(action, state) {
            console.log(action, state);
      }

      const handleSearch = (event) => {
            setSearch(event.target.value);
      };

      data = {
            nodes: data.nodes.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())),
      };

      return (
            <>
                  <label htmlFor="search">
                        Search by Task:&nbsp;
                        <input id="search" type="text" value={search} onChange={handleSearch} />
                  </label>
                  <br />
                  <CompactTable columns={COLUMNS} data={data} theme={theme} sort={sort} />


            </>
      );

}

export default Table;