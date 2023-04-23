import React, { useEffect, useState }  from 'react';
import { useSelector } from "react-redux";
import { usePagination } from '@table-library/react-table-library/pagination';
import {Table,Header,HeaderRow,Body,Row,Cell,} from "@table-library/react-table-library/table";
import { useTheme } from '@table-library/react-table-library/theme';
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/material-ui';
import { useSort,HeaderCellSort } from '@table-library/react-table-library/sort';

import './TableView.css'

function TableView(){

      const getStateEmployees = useSelector((state) => state.employeesStateReducer);
      const employees = getStateEmployees.employees
      const nodes = employees !== null ?  employees : []
      let data = { nodes };

      const [search, setSearch] = React.useState('');
      const [newData, setNewData] = React.useState(data)

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

      // Table functionality
            // sorting 
      function onSortChange(action, state) {
            //console.log(action, state);
      }
      const sort = useSort(newData.nodes,{
            onChange: onSortChange,
      },{
            sortFns: {
                  FIRSTNAME: (array) => array.sort((a, b) => a.firstName.localeCompare(b.firstName)),
                  STARTDATE: (array) => array.sort((a, b) => a.startDate - b.startDate),
                  LASTNAME: (array) => array.sort((a, b) => a.lastName.localeCompare(b.lastName)),
                  DEPARTMENT: (array) => array.sort((a, b) => a.department.localeCompare(b.department)),
                  BIRTHTDATE: (array) => array.sort((a, b) => a.birthDate - b.birthdate),
                  STREET: (array) => array.sort((a, b) => a.street.localeCompare(b.street)),
                  CITY: (array) => array.sort((a, b) => a.city.localeCompare(b.city)),
                  STATE: (array) => array.sort((a, b) => a.state.localeCompare(b.state)),
                  ZIPCODE: (array) => array.sort((a, b) => a.zipCode.localeCompare(b.zipCode)),
            },
      },);

            // paging
      const showEntries = [10, 25, 50, 100]
      const [selectValue, setSelect] = React.useState(10)
      const [startEntry, setStartEntry] = React.useState(0)
      const [endEntry, setEndEntry] = React.useState(Math.min(selectValue,newData.nodes.length))

      useEffect(() => {
            setStartEntry(Math.min(1, newData.nodes.length))
            setEndEntry(Math.min(selectValue, newData.nodes.length))
      }, [newData])

      const pagination = usePagination(
            newData,
            {
                  state: {
                        page: 0,
                        size: Number(selectValue),
                        
                  },
                  onChange: onPaginationChange,
            }
      );
      function onPaginationChange(action, state) {
            const currentPage = state.page
            const size = state.size
            const start = currentPage*size+1
            const end = Math.min((currentPage*size+size),newData.nodes.length)
            setStartEntry(start)
            setEndEntry(end)
      }

      // search 
      function filtered(search){
            const filteredData = data.nodes
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
            setNewData({nodes:filteredData})             
      }
      const handleSearch = (event) => {
            setSearch(event.target.value);
            if (event.target.value.length > 0 ) {
                  filtered(event.target.value)
            } else {
                  setNewData(data)
            }
      };

      return (
            <>
            <div className='table-header' style={{display:'flex', justifyContent:'space-between',width:'100%',marginTop:'20px',marginBottom:'20px'}}>
                  <label htmlFor="select" style={{fontSize:'14px', fontWeight:'400'}}>Show
                        <select className='show-entries' onChange={ (event) => setSelect(event.target.value)} style={
                              {marginLeft:'10px', marginRight:'10px',borderColor:'blue', color:'blue', height:'29px', fontWeight:'600'}
                              }>
                              {showEntries.map(entry => {
                                    return <option key={entry} style={{borderColor:'blue'}} aria-label={`To show ${entry} entries`}>{entry}</option>
                              })}
                        </select>entries
                  </label>
                  <label htmlFor="search" style={{fontSize:'14px', fontWeight:'400'}}>
                        Search:
                        <input id="search" type="text" value={search} onChange={handleSearch} style={{textAlign:'left', marginLeft:'10px', borderColor:'blue',height:'29px', color:'blue', fontWeight:'600'}}/>
                  </label>
            </div>
            <Table data={newData} sort={sort} theme={theme} pagination={pagination} style={{color:"black"}}>
                  {(tableList) => (
                        <>
                        <Header>
                              <HeaderRow role="grid">
                                    <HeaderCellSort sortKey="FIRSTNAME" key="FIRSTNAME" role="gridcell">First name</HeaderCellSort>
                                    <HeaderCellSort sortKey="LASTNAME" key="LASTNAME" role="gridcell">Last name</HeaderCellSort>
                                    <HeaderCellSort sortKey="STARTDATE" key="STARTDATE" role="gridcell">Start date</HeaderCellSort>
                                    <HeaderCellSort sortKey="DEPARTMENT" key="DEPARTMENT" role="gridcell">Department</HeaderCellSort>
                                    <HeaderCellSort sortKey="BIRTHDATE" key="BIRTHDATE" role="gridcell">Date of birth</HeaderCellSort>
                                    <HeaderCellSort sortKey="STREET" key="STREET" role="gridcell">Street</HeaderCellSort>
                                    <HeaderCellSort sortKey="CITY" key="CITY" role="gridcell">City</HeaderCellSort>
                                    <HeaderCellSort sortKey="STATE" key="STATE" style={{whiteSpace: 'unset' }} role="gridcell">State</HeaderCellSort>
                                    <HeaderCellSort sortKey="ZIPCODE" key="ZIPCODE" role="gridcell">Zipcode</HeaderCellSort>
                              </HeaderRow>
                        </Header>
                        <Body>
                              {tableList.map((item,index) => {
                                    return (
                                    <Row item={item} style={{width:'100%'}} role="grid">
                                          <Cell tabIndex={1 + index * 9} role="gridcell">{item.firstName}</Cell>
                                          <Cell  tabIndex={2 + index * 9} role="gridcell">{item.lastName}</Cell>
                                          <Cell  tabIndex={3 + index * 9} role="gridcell">{item.startDate}</Cell>
                                          <Cell  tabIndex={4 + index * 9}role="gridcell">{item.department}</Cell>
                                          <Cell  tabIndex={5 + index * 9}role="gridcell">{item.birthDate}</Cell>
                                          <Cell  tabIndex={6 + index * 9}role="gridcell">{item.street}</Cell>
                                          <Cell tabIndex={7 + index * 9}role="gridcell">{item.city}</Cell>
                                          <Cell  tabIndex={8 + index * 9}role="gridcell">{item.state}</Cell>
                                          <Cell  tabIndex={9 + index * 9} role="gridcell">{item.zipCode}</Cell>
                                    </Row>
                              )})}
                        </Body></>)}
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