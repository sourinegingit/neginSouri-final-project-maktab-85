import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config/constants";
import axios from "axios";
const initialState = {
  products: [],
  loading: false,
  error: "",
  status:'',
  selectedTodo:{}
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

// export const createTodo = createAsyncThunk(
//   "todos/addtTodo",
//   async (newTodo) => {
//     try {
//       const res = await axios.post(BASE_URL, newTodo);
//       console.log(res);
//       return res.data;
//     } catch (error) {
//       return error.message;
//     }
//   }
// );

// export const deleteTodo = createAsyncThunk(
//   "todos/deleteTodo",
//   async (id) => {
//     try {
//       const res = await axios.delete(`${BASE_URL}/${id}` );
//       console.log(res);
//       return id
//     } catch (error) {
//       return error.message;
//     }
//   }
// );

// export const updateTodo = createAsyncThunk(
//   "todos/updateTodo",
//   async (currentTodo) => {
//     try {
//       const res = await axios.put(BASE_URL, currentTodo);
//       console.log(res);
//       return currentTodo
//     } catch (error) {
//       return error.message;
//     }
//   }
// );

const cartSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setSelectTodo(state,action){
      state.selectedTodo=action.payload
    }
  },
  extraReducers: (builder) => {
    // read
    builder.addCase(fetchTodos.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return { ...state, loading: false, products: action.payload };
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      return { ...state, loading: false, products: [], error: action.payload };
    });
    //   add
  //   builder.addCase(createTodo.pending, (state) => {
  //     return { ...state, loading: true };
  //   });
  //   builder.addCase(createTodo.fulfilled, (state, action) => {
  //     return {
  //       ...state,
  //       loading: false,
  //       products: [...state.products, action.payload],
  //     };
  //   });
  //   builder.addCase(createTodo.rejected, (state, action) => {
  //     return { ...state, loading: false, products: [], error: action.payload };
  //   });
  //   // delete
  //   builder.addCase(deleteTodo.fulfilled,(state,action)=>{
  //       state.loading=false
  //       state.products=state.products.filter(todo=>todo.id!=action.payload)
  //       console.log(action.payload)
  //   })
  //   // update
  //   builder.addCase(updateTodo.fulfilled,(state,action)=>{
  //     state.loading=false
  //     const index=state.products.findIndex((item)=>item.id==action.payload.currentTodo.id)
  //     state.products=state.products.splice(index,1,action.payload.currentTodo)
  // })
  },
});

export default cartSlice.reducer;
export const {setSelectTodo}=cartSlice.actions