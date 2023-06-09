import { createSlice } from '@reduxjs/toolkit';
import { getProfile, updateProfile } from '@/axios/axios';

// Profile slice
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    });

    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //Update Profile
    builder.addCase(updateProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload.user;
    });

    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  }
});

export default profileSlice.reducer;