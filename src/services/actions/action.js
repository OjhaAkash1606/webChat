import {  select_user } from "../constant";

export const selectUser = (data) => {
  console.log(data);
  return {
    type: select_user,
    data: data,
  };
};

