import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authSignup = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5090/api/user/create_user",
        data
      );

      return response.data;
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return rejectWithValue(error.response.data);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: false,
    userDetails: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authSignup.pending, () => {
      //   state.loading = true;
      //   state.error = null;
    });
    builder.addCase(authSignup.fulfilled, (state, action) => {
      state.user = true;
      state.userDetails = action.payload;
    });
    builder.addCase(authSignup.rejected, () => {
      // state.loading = true;
      // state.error = null;
    });
  },
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice;
