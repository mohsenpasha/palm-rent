import { configureStore } from '@reduxjs/toolkit'
import reelsReducer from './slices/reelsSlice'
import carListReducer from './slices/carListSlice'
import globalReducer from './slices/globalSlice'

export const store = configureStore({
  reducer: {
    reels: reelsReducer,
    carList: carListReducer,
    global:globalReducer
  },
})
