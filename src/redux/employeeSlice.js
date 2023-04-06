import { createSlice } from "@reduxjs/toolkit";



const initialState = {
      employees: [],
};
const employeeSlice = createSlice({
      name: "employeesState",
      initialState,
      reducers: {
            addEmployee(state, action) {
                  console.log(action.payload)
                  state.employees.push(
                        action.payload
                  );
            }
      }
})

export const { addEmployee } = employeeSlice.actions
export const employeesStateReducer = employeeSlice.reducer;
