import { createSlice } from "@reduxjs/toolkit";

const BasketSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
  },
  reducers: {
      addItems(state,action){
        const newItem = action.payload;
        const total=action.payload.reduce((sum,item)=>sum+item.quantity,0)
        const amount=action.payload.reduce((sum,item)=>sum+item.price,0)
        return {
          totalQuantity:total,
          totalAmount:amount,
          items:newItem
        }
      },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (existingItem == -1) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name
        });
      } else {
        const items = [...state.items];
        items[existingItem].quantity++;
        items[existingItem].totalPrice =
          items[existingItem].totalPrice + newItem.price;
        state.items = items;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const items = [...state.items];
      const existingItem = state.items.findIndex((item) => item.id === id);
      state.totalQuantity--;
      if (items[existingItem].quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        items[existingItem].quantity--;
        items[existingItem].totalPrice =
          items[existingItem].totalPrice - items[existingItem].price;
        state.items = items;
      }
    }
  
  }
});

export const cartActions = BasketSlice.actions;
export default BasketSlice;
