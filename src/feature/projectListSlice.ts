import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { projects } from '@constant/project';
export type StateType = {
    projectKey: string,
    iframe: string,
    source: string
}
const initialState = {
    projectKey: 'morph',
    iframe: projects[0].iframe,
    source: projects[0].source,
}

const projectListSlice = createSlice({
    name: 'projectList',
    initialState,
    reducers: {
        projectKeyChanged(state, action) {
            state.projectKey = action.payload;
            const el = projects.find(el => el.key === action.payload);
            state.iframe = el ? el.iframe : '';
            state.source = el ? el.source : '';
        }
    }
});

export const { projectKeyChanged } = projectListSlice.actions;
export const projectKeySelector = (state: RootState) => state.projectList;
export default projectListSlice.reducer;