import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  isReelActive:false,
  reelList:['/videos/test-vid-1.mp4','/videos/test-vid-2.mp4','/videos/test-vid-1.mp4','/videos/test-vid-2.mp4','/videos/test-vid-1.mp4','/videos/test-vid-2.mp4','/videos/test-vid-1.mp4','/videos/test-vid-2.mp4'],
  activeIndex:0,
}

const reelsSlice = createSlice({
  name: 'reels',
  initialState,
  reducers: {
    changeActiveIndex: (state,action) => {
      state.activeIndex = action.payload
    },
    changeReelActive: (state,action) => {
      state.isReelActive = action.payload
    },
  },
})

export const { changeActiveIndex,changeReelActive } = reelsSlice.actions
export default reelsSlice.reducer