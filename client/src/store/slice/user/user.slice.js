// // import { createSlice } from '@reduxjs/toolkit'
// // import { IoLogIn } from 'react-icons/io5'



// // export const userSlice = createSlice({
// //   name: 'user',
// //   initialState :{
// //     isauthenticated: false,
// //   },
// //   reducers: {
// //     login: () => { 
// //         console.log("logged in");
// //              },
// //     },
// // })

// // export const { login } = userSlice.actions

// // export default userSlice.reducer


// import { createSlice } from "@reduxjs/toolkit";
// import {
//   getOtherUsersThunk,
//   getUserProfileThunk,
//   loginUserThunk,
//   logoutUserThunk,
//   registerUserThunk,
// } from "./user.thunk";

// const initialState = {
//   isAuthenticated: false,
//   userProfile: null,
//   otherUsers: null,
//   selectedUser: JSON.parse(localStorage.getItem("selectedUser")),
//   buttonLoading: false,
//   screenLoading: true,
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setSelectedUser: (state, action) => {
//       localStorage.setItem("selectedUser",JSON.stringify(action.payload))
//       state.selectedUser = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     // login user
//     builder.addCase(loginUserThunk.pending, (state, action) => {
//       state.buttonLoading = true;
//     });
//     builder.addCase(loginUserThunk.fulfilled, (state, action) => {
//       state.userProfile = action.payload?.responseData?.user;
//       state.isAuthenticated = true;
//       state.buttonLoading = false;
//     });
//     builder.addCase(loginUserThunk.rejected, (state, action) => {
//       state.buttonLoading = false;
//     });

//     // register user
//     builder.addCase(registerUserThunk.pending, (state, action) => {
//       state.buttonLoading = true;
//     });
//     builder.addCase(registerUserThunk.fulfilled, (state, action) => {
//       state.userProfile = action.payload?.responseData?.user;
//       state.isAuthenticated = true;
//       state.buttonLoading = false;
//     });
//     builder.addCase(registerUserThunk.rejected, (state, action) => {
//       state.buttonLoading = false;
//     });

//     // logout user
//     builder.addCase(logoutUserThunk.pending, (state, action) => {
//       state.buttonLoading = true;
//     });
//     builder.addCase(logoutUserThunk.fulfilled, (state, action) => {
//       state.userProfile = null;
//       state.selectedUser = null;
//       state.otherUsers = null;
//       state.isAuthenticated = false;
//       state.buttonLoading = false;
//       localStorage.clear();
//     });
//     builder.addCase(logoutUserThunk.rejected, (state, action) => {
//       state.buttonLoading = false;
//     });

//     // get user profile
//     builder.addCase(getUserProfileThunk.pending, (state, action) => {
//       state.screenLoading = true;
//     });
//     builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
//       state.isAuthenticated = true;
//       state.screenLoading = false;
//       state.userProfile = action.payload?.responseData;
//     });
//     builder.addCase(getUserProfileThunk.rejected, (state, action) => {
//       state.screenLoading = false;
//     });

//     // get other users
//     builder.addCase(getOtherUsersThunk.pending, (state, action) => {
//       state.screenLoading = true;
//     });
//     builder.addCase(getOtherUsersThunk.fulfilled, (state, action) => {
//       state.screenLoading = false;
//       state.otherUsers = action.payload?.responseData;
//     });
//     builder.addCase(getOtherUsersThunk.rejected, (state, action) => {
//       state.screenLoading = false;
//     });
//   },
// });

// export const { setSelectedUser } = userSlice.actions;

// export default userSlice.reducer;








import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk } from './user.thunk'

const initialState = {

  isAuthenticated: false,
  screenLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.pending, (state, action) => {
      console.log("login pending");
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      console.log("login fulfilled");
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      console.log("login rejected");
    });

  },

});





// Action creators are generated for each case reducer function
export const { } = userSlice.actions

export default userSlice.reducer