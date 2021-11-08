import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter', // name
  initialState: 0, // gia tri khoi tao
  reducers: {
    increase(state, action) {
      return state + 1;
    }, //ham increase nhan 2 bien la state va action, action khi muon dung action.payload thi khai bao

    decrease(state) {
      return state - 1;
    },
  }, // chi dinh cac reducer laf 1 object: hanh dong, truong hop xay ra
});

const { actions, reducer } = counterSlice;
export const { increase, decrease } = actions; // named export
export default reducer; // default export
