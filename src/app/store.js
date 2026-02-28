import { configureStore } from "@reduxjs/toolkit";

import listingReducer from "./features/listingsSlice";

export const store = configureStore({
  reducer: {
    listing: listingReducer,
  },
});
