import { configureStore } from '@reduxjs/toolkit'
import testReducer from './slices/testSlice'

export const store = configureStore({
  reducer: {
    counter: testReducer,
  },
})
