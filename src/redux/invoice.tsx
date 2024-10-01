import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const invoiceSubmit = createAsyncThunk(
  "invoice/submit",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5090/api/user/invoice",
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

const InvoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    user: false,
    userDetails: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(invoiceSubmit.pending, () => {
      //   state.loading = true;
      //   state.error = null;
    });
    builder.addCase(invoiceSubmit.fulfilled, (state, action) => {
      state.user = true;
      state.userDetails = action.payload;
    });
    builder.addCase(invoiceSubmit.rejected, () => {
      // state.loading = true;
      // state.error = null;
    });
  },
});

export const InvoiceActions = InvoiceSlice.actions;

export default InvoiceSlice;
