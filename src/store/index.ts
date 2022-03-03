

import { configureStore } from "@reduxjs/toolkit";
import pokimeonReducer from "./pokimeonSlice";
export const store=configureStore({
    reducer:{pokemon:pokimeonReducer}
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch