import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching feedbacks
export const fetchFeedbacks = createAsyncThunk('feedbacks/fetchFeedbacks', async () => {
  const response = await axios.get('http://localhost:2024/api/feedback/GetAllFeedbacks');
  return response.data;
});

// Async thunk for deleting a comment
export const deleteFeedback = createAsyncThunk('feedbacks/deleteFeedback', async (id) => {
  await axios.delete(`http://localhost:2024/api/feedback/Deletefeedback/${id}`);
  return id;
});

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState: {
    feedbacks: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedbacks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFeedbacks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.feedbacks = action.payload;
      })
      .addCase(fetchFeedbacks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteFeedback.fulfilled, (state, action) => {
        state.feedbacks = state.feedbacks.filter(feedback => feedback.id !== action.payload);
      });
  },
});

export default feedbacksSlice.reducer;
