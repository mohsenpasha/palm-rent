import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // carList:[
  //   {
  //     id:1,
  //     title:'Audi r8 2022',
  //     priceList:{
  //       '1:6':{previousPrice:143,currentPrice:79},
  //       '7:19':{previousPrice:134,currentPrice:74},
  //       '20:29':{previousPrice:122,currentPrice:67},
  //       '30:':{previousPrice:107,currentPrice:59},
  //     },
  //     images:['/images/singlecar-1.png','/images/singlecar-2.jpg','/images/singlecar-3.jpg'],
  //     options:['بدون دپوزیت','بیمه رایگان','کیلومتر نامحدود'],
  //     gearbox:'دنده‌ای',
  //     passengers:5,
  //     suitcase:3,
  //     gasType:'بنزین',


  //   },
  // ],
  carDates:['1404/05/13', '1404/05/22'],
  isSingleGalleryOpen:false,
  // singleCar:{}
}

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    changeCarDates: (state,action) => {
      state.carDates = action.payload
    },
    changeSingleGalleryStatus: (state,action) => {
      state.isSingleGalleryOpen = action.payload
    },
  },
})

export const { changeCarDates,changeSingleGalleryStatus } = globalSlice.actions
export default globalSlice.reducer