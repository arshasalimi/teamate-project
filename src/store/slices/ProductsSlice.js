// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import Api from "../../Services/api";
// import { useState } from "react";

// const initialState = {
//     loading: false,
//     products: [],
//     error: ""
// }
// // const [products, setProducts] = useState([])
// // console.log(products)
// const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
//     axios.get("https://dummyjson.com/products")
//         .then(res => console.log(res.data.products))
// })

// const ProductsApi = createSlice({
//     name: "products",
//     initialState,
//     extraReducers: (builder) => {
//         builder.addCase(fetchProducts.pending, (state) => {
//             state.loading = true;
//         });
//         builder.addCase(fetchProducts.fulfilled, (state, action) => {
//             state.loading = false;
//             state.products = action.payload;
//             state.error = "";
//         });
//         builder.addCase(fetchProducts.rejected, (state, action) => {
//             state.loading = false;
//             state.products = [];
//             state.error = action.payload.message;
//         });
//     }
// })

// export default ProductsApi.reducer;
// export { fetchProducts }