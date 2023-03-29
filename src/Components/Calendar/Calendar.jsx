import React, { useState } from 'react';
import DatePicker  from "react-datepicker"
import range  from 'lodash/range'
import { getMonth, getYear, getDate } from 'date-fns'

import "react-datepicker/dist/react-datepicker.css"
import './Calendar.css'



function Calendar({setDate, setDateInput}) {
      const [ newDate, setNewDate ] = useState(undefined);

      if(newDate){
        const finalMonth = getMonth(newDate) + 1
        const finalYear = getYear(newDate)
        const finalDay = getDate(newDate)
        const finalDate = `${finalMonth}/${finalDay}/${finalYear}`
        setDate(finalDate)
      }
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
                <button className="calendar-select" onClick={ e=> { e.preventDefault(); decreaseMonth()}} disabled={prevMonthButtonDisabled}>
                  <i className="fa-solid fa-caret-left"></i>
                </button>
                <button ><i className="fa-solid fa-house" onClick={(e) => { e.preventDefault(); changeYear("2023"); changeMonth("03")}}></i></button>
              </div>
              <div style={{
                display:"flex",
                gap:"5px"
              }}>
                <select className='calendar-select'
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }>
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              
                <select className='calendar-select'
                  value={getYear(date)}
                  onChange={({ target: { value } }) => changeYear(value)}>
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button className="calendar-select" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                  <i className="fa-solid fa-caret-right"></i>
                </button>
              </div>
            </div>
          )}
          dateFormat="MM/dd/yyyy"
          onChange={(date) => setNewDate(date)}
          selected={newDate}
          tabIndex={1}
          placeholderText="Click to select a date"
        />
        

      );
}

export default Calendar;