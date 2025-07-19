import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  carList:[
    {
      id:1,
      title:'Audi r8 2022',
      priceList:{
        '1:6':{previousPrice:143,currentPrice:79},
        '7:19':{previousPrice:134,currentPrice:74},
        '20:29':{previousPrice:122,currentPrice:67},
        '30:':{previousPrice:107,currentPrice:59},
      },
      images:['/images/singlecar-1.png','/images/singlecar-2.jpg','/images/singlecar-3.jpg'],
      options:['بدون دپوزیت','بیمه رایگان','کیلومتر نامحدود'],
      gearbox:'دنده‌ای',
      passengers:5,
      suitcase:3,
      gasType:'بنزین',


    },
    {
      id:2,
      title:'Audi r8 2022',
      priceList:{
        '1:6':{previousPrice:143,currentPrice:79},
        '7:19':{previousPrice:134,currentPrice:74},
        '20:29':{previousPrice:122,currentPrice:67},
        '30:':{previousPrice:107,currentPrice:59},
      },
      images:['/images/singlecar-1.png','/images/singlecar-2.jpg','/images/singlecar-3.jpg'],
      options:['بدون دپوزیت','تحویل رایگان','بیمه رایگان','کیلومتر نامحدود'],
      gearbox:'دنده‌ای',
      passengers:5,
      suitcase:3,
      gasType:'بنزین'


    },
    {
      id:3,
      title:'Audi r8 2022',
      priceList:{
        '1:6':{previousPrice:143,currentPrice:79},
        '7:19':{previousPrice:134,currentPrice:74},
        '20:29':{previousPrice:122,currentPrice:67},
        '30:':{previousPrice:107,currentPrice:59},
      },
      images:['/images/singlecar-1.png','/images/singlecar-2.jpg','/images/singlecar-3.jpg'],
      options:['بدون دپوزیت','تحویل رایگان','بیمه رایگان','کیلومتر نامحدود'],
      gearbox:'دنده‌ای',
      passengers:5,
      suitcase:3,
      gasType:'بنزین'


    },
    {
      id:4,
      title:'Audi r8 2022',
      priceList:{
        '1:6':{previousPrice:143,currentPrice:79},
        '7:19':{previousPrice:134,currentPrice:74},
        '20:29':{previousPrice:122,currentPrice:67},
        '30:':{previousPrice:107,currentPrice:59},
      },
      images:['/images/singlecar-1.png','/images/singlecar-2.jpg','/images/singlecar-3.jpg'],
      options:['بدون دپوزیت','تحویل رایگان','بیمه رایگان'],
      gearbox:'دنده‌ای',
      passengers:5,
      suitcase:3,
      gasType:'بنزین'


    },
    {
      id:5,
      title:'Audi r8 2022',
      priceList:{
        '1:6':{previousPrice:143,currentPrice:79},
        '7:19':{previousPrice:134,currentPrice:74},
        '20:29':{previousPrice:122,currentPrice:67},
        '30:':{previousPrice:107,currentPrice:59},
      },
      images:['/images/singlecar-1.png','/images/singlecar-2.jpg','/images/singlecar-3.jpg'],
      options:['بدون دپوزیت','تحویل رایگان','کیلومتر نامحدود'],
      gearbox:'دنده‌ای',
      passengers:5,
      suitcase:3,
      gasType:'بنزین'


    },
  ],
}

const carListSlice = createSlice({
  name: 'carList',
  initialState,
  reducers: {
    addCarToList: (state,action) => {
      state.isReelActive = action.payload
    },
  },
})

export const { addCarToList } = carListSlice.actions
export default carListSlice.reducer