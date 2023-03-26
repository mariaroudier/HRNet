import React, { useEffect, useState, useRef }  from 'react';
import { usePagination } from '@table-library/react-table-library/pagination';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/material-ui';
import { useSort } from '@table-library/react-table-library/sort';


function Table(){
      // Design
      const materialTheme = getTheme({
            ...DEFAULT_OPTIONS,
            striped: true,
            highlightOnHover: true,
      });
      const customTheme = {
            Table: `
                  --data-table-library_grid-template-columns:  70px repeat(5, minmax(0, 1fr));
            
                  margin: 16px 0px;
            `,
      };
      const theme = useTheme([materialTheme, customTheme]);

      // Mock data
      // const nodes = [
      //       {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'King',
      //             lastName: 'Cartledge',
      //             birthdate: '5/11/2021',
      //             startDate: '1/18/2021',
      //             street: '5 Del Sol Point',
      //             city: 'Richmond',
      //             state: 'Virginia',
      //             zipCode: '23289',
      //             department: 'Sales'
      //         },
      //         {
      //             firstName: 'Devy',
      //             lastName: 'Crampton',
      //             birthdate: '5/26/2021',
      //             startDate: '3/5/2021',
      //             street: '84 Sheridan Road',
      //             city: 'Lubbock',
      //             state: 'Texas',
      //             zipCode: '79452',
      //             department: 'Sales'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'King',
      //             lastName: 'Cartledge',
      //             birthdate: '5/11/2021',
      //             startDate: '1/18/2021',
      //             street: '5 Del Sol Point',
      //             city: 'Richmond',
      //             state: 'Virginia',
      //             zipCode: '23289',
      //             department: 'Sales'
      //         },
      //         {
      //             firstName: 'Devy',
      //             lastName: 'Crampton',
      //             birthdate: '5/26/2021',
      //             startDate: '3/5/2021',
      //             street: '84 Sheridan Road',
      //             city: 'Lubbock',
      //             state: 'Texas',
      //             zipCode: '79452',
      //             department: 'Sales'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'King',
      //             lastName: 'Cartledge',
      //             birthdate: '5/11/2021',
      //             startDate: '1/18/2021',
      //             street: '5 Del Sol Point',
      //             city: 'Richmond',
      //             state: 'Virginia',
      //             zipCode: '23289',
      //             department: 'Sales'
      //         },
      //         {
      //             firstName: 'Devy',
      //             lastName: 'Crampton',
      //             birthdate: '5/26/2021',
      //             startDate: '3/5/2021',
      //             street: '84 Sheridan Road',
      //             city: 'Lubbock',
      //             state: 'Texas',
      //             zipCode: '79452',
      //             department: 'Sales'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'King',
      //             lastName: 'Cartledge',
      //             birthdate: '5/11/2021',
      //             startDate: '1/18/2021',
      //             street: '5 Del Sol Point',
      //             city: 'Richmond',
      //             state: 'Virginia',
      //             zipCode: '23289',
      //             department: 'Sales'
      //         },
      //         {
      //             firstName: 'Devy',
      //             lastName: 'Crampton',
      //             birthdate: '5/26/2021',
      //             startDate: '3/5/2021',
      //             street: '84 Sheridan Road',
      //             city: 'Lubbock',
      //             state: 'Texas',
      //             zipCode: '79452',
      //             department: 'Sales'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'King',
      //             lastName: 'Cartledge',
      //             birthdate: '5/11/2021',
      //             startDate: '1/18/2021',
      //             street: '5 Del Sol Point',
      //             city: 'Richmond',
      //             state: 'Virginia',
      //             zipCode: '23289',
      //             department: 'Sales'
      //         },
      //         {
      //             firstName: 'Devy',
      //             lastName: 'Crampton',
      //             birthdate: '5/26/2021',
      //             startDate: '3/5/2021',
      //             street: '84 Sheridan Road',
      //             city: 'Lubbock',
      //             state: 'Texas',
      //             zipCode: '79452',
      //             department: 'Sales'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      //         {
      //             firstName: 'Lars',
      //             lastName: 'Domenico',
      //             birthdate: '1/15/2021',
      //             startDate: '10/18/2021',
      //             street: '3 Eagan Court',
      //             city: 'San Bernardino',
      //             state: 'California',
      //             zipCode: '92415',
      //             department: 'Services'
      //         },
      // ]
      const nodes = localStorage.getItem("employees") !== null
      ? JSON.parse(localStorage.getItem("employees"))
      : [];

      let data = { nodes };

      const [search, setSearch] = React.useState('');
      const [newData, setNewData] = React.useState(data)
      console.log(newData)
      // newData.nodes.map(el => {
            // console.log(el.newEmployee.department.value)
            //const values = Object.values(el.newEmployee.department)
            // console.log(values)
            // el.newEmployee.map(podEl => {
            //       console.log(podEl.newEmployee)
            // })
            // console.log(el.newEmployee.state)
      // })


      // Table functionality
       const COLUMNS = [
            { label: 'First Name', renderCell: (item) => {return item.newEmployee.firstName}, sort: { sortKey: 'FIRSTNAME' } },
            { label: 'Last Name', renderCell: (item) => item.newEmployee.lastName, sort: { sortKey: 'LASTNAME' } },
            { label: 'Start Date', renderCell: (item) => item.newEmployee.startDate, sort: { sortKey: 'STARTDATE' } },
            //{ label: 'Department', renderCell: (item) => item.newEmployee.department.label, sort: { sortKey: 'DEPARTMENT' } },
            { label: 'Date of Birth', renderCell: (item) => item.newEmployee.birthDate, sort: { sortKey: 'BIRTHDATE' } },
            { label: 'Street', renderCell: (item) => item.newEmployee.street, sort: { sortKey: 'STREET' } },
            { label: 'City', renderCell: (item) => item.newEmployee.city, sort: { sortKey: 'CITY' } },
            //{ label: 'State', renderCell: (item) => item.newEmployee.state.label, sort: { sortKey: 'STATE' } },
            { label: 'Zip Code', renderCell: (item) => item.newEmployee.zipCode, sort: { sortKey: 'ZIPCODE' } },
      ];
      
            // sorting //
      function onSortChange(action, state) {
            console.log(action, state);

      }
      const sort = useSort(data,{
            onChange: onSortChange,
      },{
            sortFns: {
                  FIRSTNAME: (array) => array.sort((a, b) => a.firstName.localeCompare(b.firstName)),
                  STARTDATE: (array) => array.sort((a, b) => a.startDate - b.startDate),
                  LASTNAME: (array) => array.sort((a, b) => a.lastName.localeCompare(b.lastName)),
                  //DEPARTMENT: (array) => array.sort((a, b) => a.department.label.localeCompare(b.department)),
                  BIRTHTDATE: (array) => array.sort((a, b) => a.birthdate - b.birthdate),
                  STREET: (array) => array.sort((a, b) => a.street.localeCompare(b.street)),
                  CITY: (array) => array.sort((a, b) => a.city.localeCompare(b.city)),
                  //STATE: (array) => array.sort((a, b) => a.state.value.localeCompare(b.state)),
                  ZIPCODE: (array) => array.sort((a, b) => a.zipCode.localeCompare(b.zipCode)),
            },
      },);
            // search //
      function filtered(search){
            const myNewData = data.nodes
                  .map(node => {
                        let strings = Object.values(node)
                        return {
                              node: node,
                              nodeStrings: strings.join(" ")
                        }
                  })
                  .filter(nodeComplex => {
                        return nodeComplex
                        .nodeStrings
                        .toLowerCase()
                        .includes(search.toLowerCase())
                  })
                  .map(nodeComplex => nodeComplex.node)
            setNewData({nodes:[myNewData]})
           
      }
      const handleSearch = (event) => {
            setSearch(event.target.value);
            if (event.target.value.length > 0 ) {
                  filtered(event.target.value)
            } else {
                  setNewData(data)
            }
      };

            // paging
      const showEntries = [10, 25, 50, 100]
      const [selectValue, setSelect] = React.useState(10)
      const [startEntry, setStartEntry] = React.useState(1)
      const [endEntry, setEndEntry] = React.useState(Math.min(10,newData.nodes.length))

      function changeSelect(event){
            setSelect(event.target.value)
      }

      const pagination = usePagination(
            newData,
            {
                  state: {
                        page: 0,
                        size: selectValue,
                  },
                  onChange: onPaginationChange,
            }
          );
 
      function onPaginationChange(action, state) {
            const currentPage = state.page
            const size = state.size
            const start = currentPage*size+1
            const end = Math.min(currentPage*size+size,newData.nodes.length)
            setStartEntry(start)
            setEndEntry(end)
      }


      return (
            
            <>
            {/* {console.log(newData)}
            {newData.nodes.map(el => {
                  console.log(el.newEmployee.department)
            })} */}
                  <div className='table-header' style={{ display:"flex", justifyContent:"space-between", width:"100%"}}>
                        <label htmlFor="select">Show
                              <select className='show-entries' onChange={changeSelect}>
                                    {showEntries.map(entry => {
                                          return <option >{entry}</option>
                                    })}
                              </select>entries
                        </label>
                        <label htmlFor="search">Search by Task:&nbsp;
                              <input id="search" type="text" value={search} onChange={handleSearch} />
                        </label>
                  </div>
                  <CompactTable columns={COLUMNS} data={newData} theme={theme} sort={sort} pagination={pagination} style={{color:"black"}}/>
                  <div className='table-footer' style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                        <span>Showing {startEntry} to {endEntry} of {newData.nodes.length} entries</span>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span>Total Pages: {pagination.state.getTotalPages(newData.nodes)}</span>
                              <span>Page:{' '} {pagination.state.getPages(newData.nodes).map((_, index) => (
                                    <button key={index} type="button" style={{ fontWeight: pagination.state.page === index ? 'bold' : 'normal',}} onClick={() => pagination.fns.onSetPage(index)}>
                                          {index + 1}
                                    </button>
                              ))}
                              </span>
                        </div>
                  </div>
            </>
      );
}

export default Table;