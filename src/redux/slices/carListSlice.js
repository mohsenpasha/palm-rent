import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  optionList:{
    1:{
      title:'بدون دپوزیت',
      description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز'
    },
    2:{
      title:'تحویل رایگان',
      description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز'
    },
    3:{
      title:'بیمه رایگان',
      description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز'
    },
    4:{
      title:'کیلومتر نامحدود',
      description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز'
    },
  },
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
      options:[1,3,4],
      gearbox:'دنده‌ای',
      passengers:5,
      suitcase:3,
      gasType:'بنزین',
      discount:null


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
      options:[1,2,3,4],
      gearbox:'دنده‌ای',
      passengers:5,
      suitcase:3,
      gasType:'بنزین',
      discount:34


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
      options:[1,2,3,4],
      gearbox:'دنده‌ای',
      passengers:5,
      suitcase:3,
      gasType:'بنزین',
      discount:null


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
      options:[1,2,3],
      gearbox:'دنده‌ای',
      passengers:5,
      suitcase:3,
      gasType:'بنزین',
      discount:53


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
      options:[1,2,4],
      gearbox:'دنده‌ای',
      passengers:5,
      suitcase:3,
      gasType:'بنزین',
      discount:10


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