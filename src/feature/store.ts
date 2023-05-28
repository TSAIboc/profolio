import { configureStore } from "@reduxjs/toolkit";
import projectListSlice from './projectListSlice';

const store = configureStore({
    reducer: {
        projectList: projectListSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;