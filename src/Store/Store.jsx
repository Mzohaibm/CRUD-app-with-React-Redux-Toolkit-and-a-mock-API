import { configureStore } from "@reduxjs/toolkit";
import UserDetail from "../Features/UserDetail";

export const Store = configureStore({
  reducer: UserDetail,
  //   if i have mulitiple slices then i can use like this
  // reducer:{
  // user : UserDetail,
  //   cart: cartDetail, so on.......
  // }
});


