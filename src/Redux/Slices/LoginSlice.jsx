import { createSlice } from "@reduxjs/toolkit";
import { register } from "react-scroll/modules/mixins/scroller";

const initialState = {
  token: "",
  isLogedin: false,
  user: null,
  found: false,
  registeruser: [
    { email: "admin@gmail.com", password: "admin", type: "admin" },
  ],
  status: "idle", //pending,success,failure
};

export const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    setloginIn: (state, action) => {
      console.log(action.payload);
      let value = state.registeruser?.find((f) => {
        if (
          f.email === action.payload.email &&
          f.password === action.payload.password
        ) {
          return f;
        }
      });
      if (value) {
        state.found = true;
        state.isLogedin = true;
        state.user = value;
      }
    },
    setLogout: (state, action) => {
      state.isLogedin = false;
      state.token = "";
      state.user = null;
      state.found = false;
    },
    registerUser: (state, action) => {
      state.registeruser = [...state.registeruser, action.payload];
    },
  },
});
export const getLoginValue = (state) => state.LoginSlice;
export const { setloginIn, setLogout, registerUser } = LoginSlice.actions;
export default LoginSlice.reducer;
