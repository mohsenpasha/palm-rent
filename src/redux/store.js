import { configureStore } from '@reduxjs/toolkit'
import reelsReducer from './slices/reelsSlice'
import carListReducer from './slices/carListSlice'
import globalReducer from './slices/globalSlice'
import blogReducer from './slices/blogSlice'
import searchReducer from './slices/searchSlice'
import loginReducer from './slices/loginSlice'

export const store = configureStore({
  reducer: {
    reels: reelsReducer,
    carList: carListReducer,
    global:globalReducer,
    blog:blogReducer,
    search:searchReducer,
    login:loginReducer
  },
})
