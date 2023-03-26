import { createSlice } from "@reduxjs/toolkit";


const employees =
      localStorage.getItem("employees") !== null
            ? JSON.parse(localStorage.getItem("employees"))
            : [];

const setItemFunc = (employee) => {
      localStorage.setItem("employees", JSON.stringify(employee));
      // localStorage.setItem("firstName", JSON.stringify(firstName));
      // localStorage.setItem("lastName", JSON.stringify(lastName));
};

const initialState = {
      employees: employees,
};

const employeeSlice = createSlice({
      name: "employee",
      initialState,

      reducers: {
            addEmployee(state, action) {
                  const newEmployee = action.payload
                  console.log(action.payload)
                  state.employees.push({
                        newEmployee

                  });
                  setItemFunc(
                        state.employees.map((el) => el),
                  );
            }
      }
})

export const employeeActions = employeeSlice.actions;
export default employeeSlice;
