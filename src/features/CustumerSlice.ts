import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface AddFoodToCustomerPayload {
  food: string;
  id: string;
}

export interface CustomerState {
  value: Customer[];
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers:{
    addCostumer: (state,action: PayloadAction<Customer>)=>{
      state.value.push(action.payload);
    },
    addFoodToCostumer: (state,action: PayloadAction<AddFoodToCustomerPayload>)=>{
      state.value.forEach((costumer => {
        if(costumer.id === action.payload.id){
          costumer.food.push(action.payload.food);
        }
      }))
    }
  },
});

export const {  addCostumer,addFoodToCostumer } = customerSlice.actions;

export default customerSlice.reducer;