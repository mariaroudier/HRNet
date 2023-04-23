import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker"
import range  from 'lodash/range'
import { getMonth, getYear } from 'date-fns'

import "react-datepicker/dist/react-datepicker.css"
import './Calendar.css'
import homeIcon from './home.png'

function Calendar({ toCommitDate, modalState }) {

  const [ selectedDate, onChangeDate ] = useState(undefined)
  useEffect(() => {
    if(modalState === true) {
      onChangeDate(undefined)
    }
  }, [modalState])

  const years = range(1940, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 5,
            display: "flex",
            justifyContent: "space-between",
          }} >
          <div style={{
            display:"flex"
          }}>
            <button className="calendar-select" onClick={ e=> { e.preventDefault(); decreaseMonth()}} disabled={prevMonthButtonDisabled} style={{cursor:'pointer'}}>
            ←
            </button>
            <button style={{padding:'0', border: 'none',marginLeft: '5px',marginRight: '5px', cursor:'pointer'}}><img src={homeIcon} alt='Today' onClick={(e) => { e.preventDefault(); changeYear("2023"); changeMonth("03")}} style={{height:'18px', width:'18px', verticalAlign: 'middle'}} /></button>
          </div>
          <div style={{
            display:"flex",
            gap:"5px"
          }}>
            <select className='calendar-select'
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              } style={{cursor:'pointer'}}>
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select className='calendar-select'
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)} style={{cursor:'pointer'}}>
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button className="calendar-select" onClick={e=> { e.preventDefault(); increaseMonth()}} disabled={nextMonthButtonDisabled} style={{cursor:'pointer'}}>
            →
            </button>
          </div>
        </div>
      )}
      dateFormat="MM/dd/yyyy"
      selected={selectedDate}
      onChange={(value) => { toCommitDate(value); onChangeDate(value)}}
      tabIndex={1}
      placeholderText="Click to select a date"
    />
  );
}
export default Calendar;