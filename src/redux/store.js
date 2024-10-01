import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth"
import InvoiceSlice from "./invoice"

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    invoice: InvoiceSlice.reducer
  },
});

export default store;
