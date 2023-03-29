import React, { useEffect, useState, useRef }  from 'react';
import { useSelector } from "react-redux";
import { usePagination } from '@table-library/react-table-library/pagination';
import {Table,Header,HeaderRow,Body,Row,HeaderCell,Cell,} from "@table-library/react-table-library/table";
import { useTheme } from '@table-library/react-table-library/theme';
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/material-ui';
import { useSort,HeaderCellSort,SortIconPositions,SortToggleType, } from '@table-library/react-table-library/sort';


function TableView(){
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
                  <div className='table-header' style={{ display:"flex", justifyContent:"space-between", width:"100%"}}>
                        <label htmlFor="select">Show
                              <select className='show-entries' onChange={changeSelect}>
                                    {showEntries.map(entry => {
                                          return <option key={entry}>{entry}</option>
                                    })}
                              </select>entries
                        </label>
                        <label htmlFor="search">Search:
                              <input id="search" type="text" value={search} onChange={handleSearch} />
                        </label>
                  </div>
                  <Table data={newData} sort={sort} theme={theme} pagination={pagination} style={{color:"black"}}>
                  {(tableList) => (
                        <>
                        <Header>
                              <HeaderRow>
                              <HeaderCellSort sortKey="FIRSTNAME" key="FIRSTNAME">First name</HeaderCellSort>
                              <HeaderCellSort sortKey="LASTNAME" key="LASTNAME">Last name</HeaderCellSort>
                              <HeaderCellSort sortKey="STARTDATE" key="STARTDATE">Start date</HeaderCellSort>
                              <HeaderCellSort sortKey="DEPARTMENT" key="DEPARTMENT">Department</HeaderCellSort>
                              <HeaderCellSort sortKey="BIRTHDATE" key="BIRTHDATE">Date of birth</HeaderCellSort>
                              <HeaderCellSort sortKey="STREET" key="STREET">Street</HeaderCellSort>
                              <HeaderCellSort sortKey="CITY" key="CITY">City</HeaderCellSort>
                              <HeaderCellSort sortKey="STATE" key="STATE">State</HeaderCellSort>
                              <HeaderCellSort sortKey="ZIPCODE" key="ZIPCODE">Zipcode</HeaderCellSort>
                              </HeaderRow>
                        </Header>
                        <Body>
                              {tableList.map((item) => (
                              <Row item={item.employee}>
                                    <Cell >{item.employee.firstName}</Cell>
                                    {/* <Cell>
                                          {item.deadline.toLocaleDateString("en-US", {
                                          year: "numeric",
                                          month: "2-digit",
                                          day: "2-digit",
                                          })}
                                    </Cell> */}
                                    <Cell >{item.employee.lastName}</Cell>
                                    <Cell >{item.employee.startDate}</Cell>
                                    <Cell >{item.employee.department}</Cell>
                                    <Cell >{item.employee.birthDate}</Cell>
                                    <Cell >{item.employee.street}</Cell>
                                    <Cell >{item.employee.city}</Cell>
                                    <Cell >{item.employee.state}</Cell>
                                    <Cell >{item.employee.zipCode}</Cell>
                              </Row>
                              ))}
                        </Body>
                        </>
                        )}
                  </Table>

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

export default TableView;