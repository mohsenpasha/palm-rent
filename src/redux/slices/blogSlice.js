import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blogs:null,
  hasMore:true,
  nextUrl:null,
  pageNumber:1
  
}

const blogSlice = createSlice({
  name: 'blogSlice',
  initialState,
  reducers: {
    addBlog: (state,action) => {
      if(!state.blogs){
        state.blogs = action.payload
      }
      else{
        state.blogs = [...state.blogs,...action.payload]
      }
    },
    changeHasMore :(state,action) => {
      state.hasMore = action.payload
    },
    changeNextUrl :(state,action) => {
      state.nextUrl = action.payload
    },
    changePageNumber :(state,action) => {
      state.pageNumber = action.payload
    },
    resetBlog :(state) => {
      state.hasMore = true
      state.nextUrl = null
      state.pageNumber = 1
      state.blogs = null
    },
    
  },
})

export const { addBlog,changeHasMore, changeNextUrl, changePageNumber, resetBlog } = blogSlice.actions
export default blogSlice.reducer