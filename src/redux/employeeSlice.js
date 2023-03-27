import { createSlice } from "@reduxjs/toolkit";


// const employees =
//       localStorage.getItem("employees") !== null
//             ? JSON.parse(localStorage.getItem("employees"))
//             : [];

//const setItemFunc = (employee) => {
//localStorage.setItem("employees", JSON.stringify(employee));
// localStorage.setItem("firstName", JSON.stringify(firstName));
// localStorage.setItem("lastName", JSON.stringify(lastName));
//};

// const initialState = {
//       employees: employees,
// };

const initialState = {
      employees: [],
};
const employeeSlice = createSlice({
      name: "employeesState",
      initialState,
      reducers: {
            addEmployee(state, action) {
                  console.log(action.payload)
                  // const newEmployee = action.payload
                  state.employees.push(
                        //{
                        // newEmployee
                        action.payload

                        //}
                  );
                  // setItemFunc(
                  //       state.employees.map((el) => el),
                  // );
            }
      }
})

// export const employeeActions = employeeSlice.actions;
export const { addEmployee } = employeeSlice.actions
//export default employeeSlice;
export const employeesStateReducer = employeeSlice.reducer;
