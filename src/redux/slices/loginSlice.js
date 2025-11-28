import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  phoneNumber:'',
  isStage2:false,
  verificationCode:''
}

const loginSlice = createSlice({
  name: 'blogSlice',
  initialState,
  reducers: {
    changeIsStage2 :(state,action) => {
      state.isStage2 = action.payload
    },
    changePhoneNumber :(state,action) => {
      state.phoneNumber = action.payload
    },
    changeVerificationCode :(state,action) => {
      state.verificationCode = action.payload
    },
    
    
  },
})

export const { changeIsStage2, changePhoneNumber, changeVerificationCode } = loginSlice.actions
export default loginSlice.reducer