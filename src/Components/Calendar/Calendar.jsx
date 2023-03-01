import React, { useState } from 'react';
import DatePicker  from "react-datepicker"
import range  from 'lodash/range'
import { getMonth, getYear } from 'date-fns'

import "react-datepicker/dist/react-datepicker.css"
import './Calendar.css'



function Calendar() {
      // const Example = () => {
      // const [startDate, setStartDate] = useState(new Date());
      // return (
      //   <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

          const [startDate, setStartDate] = useState("");
          const years = range(1990, getYear(new Date()) + 1, 1);
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
                    <button className="calendar-select" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                      <i class="fa-solid fa-caret-left"></i>
                    </button>
                    <i class="fa-solid fa-house"></i>
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
                      <i class="fa-solid fa-caret-right"></i>
                    </button>
                  </div>
                </div>
              )}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MM/dd/yyyy"
            />
          );

      // );
    // };
}

export default Calendar;