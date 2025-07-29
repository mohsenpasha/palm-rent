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
  carDates:['1404/05/14','1404/06/21'],
  deliveryTime:'10:00',
  returnTime:'10:00',
  isSingleGalleryOpen:false,
  isHeaderClose:false,
  isSearchOpen:false,
  isFilterOpen:false,
  isDateSelectOpen:false,
  isTranslatePopupOpen:false,
  isSearchPopupOpen:false,
  roadMapStep:1,
  cities:['dubai','istanbul','kayseri','kish','ezmir','georgia','oman','samsun','antalya','ankara'],
  selectedCity:null,
  isDateJalili:true,
  descriptionPopup:{title:null,description:null},
  locations:[
    {
      id:1,
      title:'در آفیس پالم رنت (رایگان)'
    },
    {
      id:2,
      title:'در محل شرکت  (رایگان)'
    },
    {
      id:3,
      title:'فرودگاه جدید استانبول  (رایگان)'
    },
  ],
  deliveryLocation:{isDesired:false,location:null},
  returnLocation:{isDesired:false,location:null},
  areLocationsSame:true,
  isLocationPopupOpen:false
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
    changeSearchStatus: (state,action) => {
      state.isSearchOpen = action.payload
    },
    changeFilterStatus: (state,action) => {
      state.isFilterOpen = action.payload
    },
    changeIsHeaderClose: (state,action) => {
      state.isHeaderClose = action.payload
    },
    changeRoadMapStep: (state,action) => {
      state.roadMapStep = action.payload
    },
    changeIsDateSelectOpen: (state,action) => {
      state.isDateSelectOpen = action.payload
    },
    changeDeliveryTime: (state,action) => {
      state.deliveryTime = action.payload
    },
    changeReturnTime: (state,action) => {
      state.returnTime = action.payload
    },
    changeIsTranslatePopupOpen: (state,action) => {
      state.isTranslatePopupOpen = action.payload
    },
    changeIsSearchPopupOpen: (state,action) => {
      state.isSearchPopupOpen = action.payload
    },
    changeSelectedCity: (state,action) => {
      state.selectedCity = action.payload
    },
    changeIsDateJalili: (state,action) => {
      state.isDateJalili = action.payload
    },
    changeDescriptionPopup: (state,action) => {
      state.descriptionPopup = action.payload
    },
    changeDeliveryLocation: (state,action) => {
      state.deliveryLocation = action.payload
    },
    changeReturnLocation: (state,action) => {
      state.returnLocation = action.payload
    },
    changeAreLocationsSame: (state,action) => {
      state.areLocationsSame = action.payload
    },
    changeIsLocationPopupOpen: (state,action) => {
      state.isLocationPopupOpen = action.payload
    },
  },
})

export const { changeCarDates, changeSingleGalleryStatus, changeSearchStatus, changeFilterStatus, changeIsHeaderClose, changeRoadMapStep, changeIsDateSelectOpen, changeDeliveryTime, changeReturnTime, changeIsTranslatePopupOpen, changeIsSearchPopupOpen, changeSelectedCity, changeIsDateJalili, changeDescriptionPopup, changeDeliveryLocation, changeReturnLocation, changeAreLocationsSame, changeIsLocationPopupOpen } = globalSlice.actions
export default globalSlice.reducer