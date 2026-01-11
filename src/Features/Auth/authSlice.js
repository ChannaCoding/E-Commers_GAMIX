import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/api";

/**
 * Action for User Login
 */
export const loginUser = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    
    // Store Token and User in LocalStorage for persistence
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Invalid email or password"
    );
  }
});

/**
 * Action for User Registration
 */
export const registerUser = createAsyncThunk("auth/register", async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Registration failed"
    );
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token"), // Track if user is logged in
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Login Actions
      .addCase(loginUser.pending, (state) => { 
        state.loading = true; 
        state.error = null; 
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => { 
        state.loading = false; 
        state.error = action.payload; 
      })
      
      // Register Actions
      .addCase(registerUser.pending, (state) => { 
        state.loading = true; 
        state.error = null; 
      })
      .addCase(registerUser.fulfilled, (state) => { 
        state.loading = false; 
      })
      .addCase(registerUser.rejected, (state, action) => { 
        state.loading = false; 
        state.error = action.payload; 
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;