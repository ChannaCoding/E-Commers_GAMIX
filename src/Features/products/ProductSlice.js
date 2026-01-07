// ProductSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../productsContent";

// Initial state
const initialState = {
  items: products,          // ទិន្នន័យទាំងអស់
  filteredItems: products,  // ទិន្នន័យបង្ហាញបន្ទាប់ពី filter
  searchTerm: "",           // ពាក្យស្វែងរក
  selectedCategory: "All",  // ជ្រើសប្រភេទ
};

// Function to filter products
const filterProducts = (state) => {
  return state.items.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());

    const matchCategory =
      state.selectedCategory === "All" ||
      product.category === state.selectedCategory;

    return matchSearch && matchCategory;
  });
};

// Create slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Set search term
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = filterProducts(state);
    },
    // Set selected category
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredItems = filterProducts(state);
    },
    // Reset filters
    resetFilters: (state) => {
      state.searchTerm = "";
      state.selectedCategory = "All";
      state.filteredItems = state.items;
    },
  },
});

// Export actions
export const { setSearchTerm, setCategory, resetFilters } = productSlice.actions;

// Export reducer
export default productSlice.reducer;
