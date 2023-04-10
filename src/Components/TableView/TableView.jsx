import React, { useEffect, useState }  from 'react';
import { useSelector } from "react-redux";
import { usePagination } from '@table-library/react-table-library/pagination';
import {Table,Header,HeaderRow,Body,Row,HeaderCell,Cell,} from "@table-library/react-table-library/table";
import { useTheme } from '@table-library/react-table-library/theme';
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/material-ui';
import { useSort,HeaderCellSort,SortIconPositions,SortToggleType, } from '@table-library/react-table-library/sort';

import './TableView.css'

function TableView(){
      // Imported design of the library
      const materialTheme = getTheme({
            ...DEFAULT_OPTIONS,
            striped: true,
            highlightOnHover: true,
      });
      const customTheme = {
            HeaderRow: `
            .th {
              border-bottom: 1px solid #a0a8ae;
            }
          `,
        BaseCell: `
            &:not(:last-of-type) {
              border-right: 1px solid #a0a8ae;
            }
    
            padding: 5px 5px;
          `,
      };
      const theme = useTheme([materialTheme, customTheme]);


      let employees = useSelector((state) => state.employees.employees);
      const nodes = employees !== null ? employees : []
      let data = { nodes };
      
      const [search, setSearch] = React.useState('');
      const [newData, setNewData] = React.useState(data)

      // Table functionality
            // sorting //
      function onSortChange(action, state) {
            console.log(action, state);
      }
      const sort = useSort(data,{
            onChange: onSortChange,
      },{
            sortFns: {
                  FIRSTNAME: (array) => array.sort((a, b) => a.employee.firstName.localeCompare(b.employee.firstName)),
                  STARTDATE: (array) => array.sort((a, b) => a.employee.startDate - b.employee.startDate),
                  LASTNAME: (array) => array.sort((a, b) => a.employee.lastName.localeCompare(b.employee.lastName)),
                  DEPARTMENT: (array) => array.sort((a, b) => a.employee.department.localeCompare(b.employee.department)),
                  BIRTHTDATE: (array) => array.sort((a, b) => a.employee.birthDate - b.employee.birthdate),
                  STREET: (array) => array.sort((a, b) => a.employee.street.localeCompare(b.employee.street)),
                  CITY: (array) => array.sort((a, b) => a.employee.city.localeCompare(b.employee.city)),
                  STATE: (array) => array.sort((a, b) => a.employee.state.localeCompare(b.employee.state)),
                  ZIPCODE: (array) => array.sort((a, b) => a.employee.zipCode.localeCompare(b.employee.zipCode)),
            },
      },);
            // search //
      function filtered(search){
            const filteredData = data.nodes
            .map(node => {
                  let strings = Object.values(node.employee)
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
            setNewData({nodes:[filteredData]})           
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
            <div className='table-header' style={{display:'flex', justifyContent:'space-between',width:'100%',marginTop:'20px',marginBottom:'20px'}}>
                  <label htmlFor="select" style={{fontSize:'14px', fontWeight:'400'}}>
                        Show
                        <select className='show-entries' onChange={changeSelect} style={{marginLeft:'10px', marginRight:'10px',borderColor:'steelblue', color:'steelblue', height:'29px', fontWeight:'600'}}>
                              {showEntries.map(entry => {
                                    return <option key={entry} style={{borderColor:'steelblue'}} aria-label={`To show ${entry} entries`}>{entry}</option>
                              })}
                        </select>entries
                  </label>
                  <label htmlFor="search" style={{fontSize:'14px', fontWeight:'400'}}>
                        Search:
                        <input id="search" type="text" value={search} onChange={handleSearch} style={{textAlign:'left', marginLeft:'10px', borderColor:'steelblue',height:'29px', color:'steelblue', fontWeight:'600'}}/>
                  </label>
            </div>
            <Table data={newData} sort={sort} theme={theme} pagination={pagination} style={{color:"black"}}>
            {(tableList) => (
                  <>
                  <Header>
                        <HeaderRow style={{padding:'0', fontWeight:'500'}}>
                              <HeaderCellSort sortKey="FIRSTNAME" key="FIRSTNAME" style={{paddingTop:'5',fontWeight:'500', whiteSpace: 'unset' }}>First name</HeaderCellSort>
                              <HeaderCellSort sortKey="LASTNAME" key="LASTNAME">Last name</HeaderCellSort>
                              <HeaderCellSort sortKey="STARTDATE" key="STARTDATE">Start date</HeaderCellSort>
                              <HeaderCellSort sortKey="DEPARTMENT" key="DEPARTMENT">Department</HeaderCellSort>
                              <HeaderCellSort sortKey="BIRTHDATE" key="BIRTHDATE">Date of birth</HeaderCellSort>
                              <HeaderCellSort sortKey="STREET" key="STREET">Street</HeaderCellSort>
                              <HeaderCellSort sortKey="CITY" key="CITY">City</HeaderCellSort>
                              <HeaderCellSort sortKey="STATE" key="STATE" style={{whiteSpace: 'unset' }}>State</HeaderCellSort>
                              <HeaderCellSort sortKey="ZIPCODE" key="ZIPCODE">Zipcode</HeaderCellSort>
                        </HeaderRow>
                  </Header>
                  <Body>
                        {tableList.map((item) => (
                        <Row item={item.employee} style={{width:'100%'}}>
                              <Cell >{item.employee.firstName}</Cell>
                              <Cell >{item.employee.lastName}</Cell>
                              <Cell >{item.employee.startDate}</Cell>
                              <Cell >{item.employee.department}</Cell>
                              <Cell >{item.employee.birthDate}</Cell>
                              <Cell >{item.employee.street}</Cell>
                              <Cell >{item.employee.city}</Cell>
                              <Cell style={{whiteSpace: 'unset',overflowWrap: "break-word" }}>{item.employee.state}</Cell>
                              <Cell >{item.employee.zipCode}</Cell>
                        </Row>
                        ))}
                  </Body>
                  </>
                  )}
            </Table>

            <div style={{display:"flex", justifyContent:"space-between", width:"100%", marginTop: '30px',marginBottom: '20px'}}>
                  <span style={{alignSelf: 'center'}}>Showing <b className='bold-text'>{startEntry}</b> to <b className='bold-text'>{endEntry}</b> of <b className='bold-text'>{newData.nodes.length}</b> entries</span>
                  <div style={{ display: 'flex', width:'50%', justifyContent: 'space-between' }}>
                        <span style={{alignSelf: 'center'}}>Total Pages: {pagination.state.getTotalPages(newData.nodes)}</span>
                        <span>Page:{' '} {pagination.state.getPages(newData.nodes).map((_, index) => (
                              <button key={index} type="button" aria-label={`To go on the page ${index+1}`} style={{ margin:'2px',fontWeight: pagination.state.page === index ? 'bold' : 'normal',}} onClick={() => pagination.fns.onSetPage(index)}>
                                    {index + 1}
                              </button>
                        ))}
                        </span>
                  </div>
            </div>
            </>
      );
}

export default TableView;