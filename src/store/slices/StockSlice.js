import { createSlice } from "@reduxjs/toolkit";

const stockSlice=createSlice(
    {
        name:"stock",
        initialState:[],
        reducers:{

            addStock(state, action) {
                action.payload.forEach((stock) => {
                  state.push(stock);
                });
              },
            // addStock(state,action){
            //     state.push(action.payload);
            //     console.warn("see",action.payload)
            // },
           
            remomoveStock(state,action){
                return state.filter(stock => stock.stockId !== action.payload);

            }
        }
    }
)
export default stockSlice.reducer ;
export const {addStock,remomoveStock} = stockSlice.actions;