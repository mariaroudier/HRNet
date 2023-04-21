import { createSlice } from "@reduxjs/toolkit";


const initialState = {
      employees: [],

};

const employeeSlice = createSlice({
      name: "employeesState",
      initialState,
      reducers: {
            addEmployee(state, action) {
                  const newEmployee = action.payload;
                  state.employees.push({
                        firstName: newEmployee.firstName,
                        lastName: newEmployee.lastName,
                        startDate: newEmployee.startDate,
                        department: newEmployee.departmentValue,
                        birthDate: newEmployee.birthDate,
                        street: newEmployee.street,
                        city: newEmployee.city,
                        state: newEmployee.stateValue,
                        zipCode: newEmployee.zipCode
                  });

            },
      }
})

export const { addEmployee } = employeeSlice.actions
export const employeesStateReducer = employeeSlice.reducer;
