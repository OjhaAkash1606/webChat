import {  /*  remove_user,  */ select_user } from "../constant";

// import { types } from "../constant";
export const selectData = (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case select_user:
      return [...state, ...[action.data]];

    

    default:
      return state;
  }
};
