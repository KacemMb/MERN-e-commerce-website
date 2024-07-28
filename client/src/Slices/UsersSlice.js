import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk('http://localhost:2024/api/user/GetAll', async () => {
  const response = await axios.get('/api/users');
  return response.data;
});

// Async thunk for deleting a user
export const deleteUser = createAsyncThunk('http://localhost:2024/api/user/DeleteUser', async (userId) => {
  await axios.delete(`/api/users/${userId}`);
  return userId;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    users: [],
    error: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = '';
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user._id !== action.payload);
      });
  }
});

export default usersSlice.reducer;

