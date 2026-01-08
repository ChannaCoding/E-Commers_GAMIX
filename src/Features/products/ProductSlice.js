import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../productsContent"; // ផ្ទៀងផ្ទាត់ផ្លូវ File ឱ្យត្រូវ

// Initial state
const initialState = {
  items: products,           // ទិន្នន័យដើមទាំងអស់
  filteredItems: products,   // ទិន្នន័យដែលបង្ហាញលើ Screen (ក្រោយ Filter)
  searchTerm: "",            // ពាក្យស្វែងរក
  selectedCategory: "All",   // ប្រភេទដែលបានជ្រើសរើស
};

// Helper Function សម្រាប់ Filter ផលិតផល
const filterProducts = (state) => {
  return state.items.filter((product) => {
    // ឆែកមើលឈ្មោះផលិតផល (មិនប្រកាន់អក្សរតូចធំ)
    const matchSearch = product.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());

    // ឆែកមើលប្រភេទផលិតផល
    const matchCategory =
      state.selectedCategory === "All" ||
      product.category === state.selectedCategory;

    return matchSearch && matchCategory;
  });
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // មុខងារស្វែងរក
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = filterProducts(state);
    },
    // មុខងារជ្រើសរើសប្រភេទ (Category)
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredItems = filterProducts(state);
    },
    // លុបការ Filter ទាំងអស់
    resetFilters: (state) => {
      state.searchTerm = "";
      state.selectedCategory = "All";
      state.filteredItems = state.items;
    },
  },
});

export const { setSearchTerm, setCategory, resetFilters } = productSlice.actions;
export default productSlice.reducer;