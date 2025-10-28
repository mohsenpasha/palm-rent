import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  optionList:{
    1:{
      title:'noDeposite',
      description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز'
    },
    2:{
      title:'freeDelivery',
      description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز'
    },
    3:{
      title:'freeinsurance',
      description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز'
    },
    4:{
      title:'unlimitedKilometers',
      description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز'
    },
  },
  carList:[],
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
  //     options:[1,3,4],
  //     gearBox:'geared',
  //     passengers:5,
  //     suitcase:3,
  //     gasType:'gasoline',
  //     discount:null


  //   },
  //   {
  //     id:2,
  //     title:'Audi r8 2022',
  //     priceList:{
  //       '1:6':{previousPrice:143,currentPrice:79},
  //       '7:19':{previousPrice:134,currentPrice:74},
  //       '20:29':{previousPrice:122,currentPrice:67},
  //       '30:':{previousPrice:107,currentPrice:59},
  //     },
  //     images:['/images/singlecar-1.png','/images/singlecar-2.jpg','/images/singlecar-3.jpg'],
  //     options:[1,2,3,4],
  //     gearBox:'geared',
  //     passengers:5,
  //     suitcase:3,
  //     gasType:'gasoline',
  //     discount:34


  //   },
  //   {
  //     id:3,
  //     title:'Audi r8 2022',
  //     priceList:{
  //       '1:6':{previousPrice:143,currentPrice:79},
  //       '7:19':{previousPrice:134,currentPrice:74},
  //       '20:29':{previousPrice:122,currentPrice:67},
  //       '30:':{previousPrice:107,currentPrice:59},
  //     },
  //     images:['/images/singlecar-1.png','/images/singlecar-2.jpg','/images/singlecar-3.jpg'],
  //     options:[1,2,3,4],
  //     gearBox:'geared',
  //     passengers:5,
  //     suitcase:3,
  //     gasType:'gasoline',
  //     discount:null


  //   },
  //   {
  //     id:4,
  //     title:'Audi r8 2022',
  //     priceList:{
  //       '1:6':{previousPrice:143,currentPrice:79},
  //       '7:19':{previousPrice:134,currentPrice:74},
  //       '20:29':{previousPrice:122,currentPrice:67},
  //       '30:':{previousPrice:107,currentPrice:59},
  //     },
  //     images:['/images/singlecar-1.png','/images/singlecar-2.jpg','/images/singlecar-3.jpg'],
  //     options:[1,2,3],
  //     gearBox:'geared',
  //     passengers:5,
  //     suitcase:3,
  //     gasType:'gasoline',
  //     discount:53


  //   },
  //   {
  //     id:5,
  //     title:'Audi r8 2022',
  //     priceList:{
  //       '1:6':{previousPrice:143,currentPrice:79},
  //       '7:19':{previousPrice:134,currentPrice:74},
  //       '20:29':{previousPrice:122,currentPrice:67},
  //       '30:':{previousPrice:107,currentPrice:59},
  //     },
  //     images:['/images/singlecar-1.png','/images/singlecar-2.jpg','/images/singlecar-3.jpg'],
  //     options:[1,2,4],
  //     gearBox:'geared',
  //     passengers:5,
  //     suitcase:3,
  //     gasType:'gasoline',
  //     discount:10


  //   },
  // ],
}

const carListSlice = createSlice({
  name: 'carList',
  initialState,
  reducers: {
    addCarList: (state, action) => {
      const optionMap = {
        1: 'noDeposite',
        2: 'freeDelivery', 
        3: 'freeInsurance',
        4: 'unlimitedKilometers'
      };

      const transformedCars = action.payload.map(car => {
        // ساخت options بر اساس شرایط
        const options = [];
        
        if (car.deposit === "no") options.push(1);
        if (car.free_delivery === "yes") options.push(2);
        if (car.insurance === "yes") options.push(3);
        if (car.km === "no") options.push(4);

        // تبدیل قیمت‌ها
        const priceList = {
          '1': {
            previousPrice: car.rent_price,
            currentPrice: car.final_price
          }
        };

        return {
          id: car.id,
          title: car.title,
          priceList: priceList,
          images: car.photo,
          options: options,
          gearBox: car.gearbox === "automatic" ? "automatic" : "geared",
          passengers: car.person,
          suitcase: car.baggage,
          gasType: car.fuel.toLowerCase(),
          discount: car.off,
          video: car.video
        };
      });

      state.carList = [...state.carList, ...transformedCars];
    },
    clearCarList: (state) => {
      state.carList = []
    },


  },
})

export const { addCarList, clearCarList } = carListSlice.actions
export default carListSlice.reducer