// crate a store with redux toolkit

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/user/user.slice'


export const store = configureStore({
  reducer: {
    userReducer,
  },
});

