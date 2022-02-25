import { createSlice } from "@reduxjs/toolkit";



export const thaliSlice=createSlice({
    name:"thali",
    initialState:{

        menu:[{dish:"chapati" ,quantity:1 ,price:10 ,finalPrice:10 ,img:'../images/chapati.jpg' },
        {dish:"pickle" ,quantity:1 ,price:5 ,finalPrice:5 ,img:'/images/pickle.jpg'},
        {dish:"curd" ,quantity: 1,price: 30,finalPrice:30, img:'../images/curd.jpg'},
        {dish: "sweet",quantity:1 ,price:100 ,finalPrice:100,img:'../images/sweets.jpg' },
        {dish:"dal" ,quantity:1 ,price:120 ,finalPrice:120,img:'../images/daal.jpg' },
        {dish:"paneer" ,quantity:1 ,price:150 ,finalPrice:150,img:'../images/paneer.jpg' },
    ],
    selDishes:[],
    valch:0,
    remch:0
         },
    reducers:{      
        quant:(state,{payload})=>
        {
            console.log(payload)
            state.selDishes.map(abc=>
                {
                    if(payload.item===abc.dish)
                    {
                        abc.quantity=Number(payload.quantity)
                        abc.finalPrice=abc.price*abc.quantity
                        state.valch++
                    }
                })
        },

        changeDish:(state,{payload})=>
        {
            state.selDishes=payload;
        },
        removeItem:(state,{payload})=>
        {
          state.selDishes.splice(payload,1)
          state.remch++
        },
        selItemCleaner:(state)=>
        {
            state.selDishes=[]
        }
    }
})

export default thaliSlice.reducer
export const {quant,changeDish,removeItem,selItemCleaner}=thaliSlice.actions;