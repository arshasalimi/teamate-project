import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Filter: "latest",
    Filter: "mostExpensive",
    Filter: "theCheapest",
    Filter: "bestseller",
    Filter: "mostVisited",
}
const FilterProduct = createSlice({
    name: "filters",
    initialState,
    reducers: {
        latestFilter: (state, action) => {
            state.latest = action.payload;
        },
        mostExpensiveFilter: (state, action) => {
            state.mostExpensive = action.payload;
        },
        theCheapestFilter: (state, action) => {
            state.theCheapest = action.payload;
        },
        bestsellerFilter: (state, action) => {
            state.bestseller = action.payload;
        },
        mostVisitedFilter: (state, action) => {
            state.mostVisited = action.payload;
        }
    }
});
export default FilterProduct.reducer;
export const { latestFilter, mostExpensiveFilter, theCheapestFilter, bestsellerFilter, mostVisitedFilter } = FilterProduct.actions;