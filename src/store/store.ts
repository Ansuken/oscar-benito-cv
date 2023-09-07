import { configureStore } from '@reduxjs/toolkit'
import { mainInfoSlice } from './slices/mainInfo'
import { jobExperienceSlice } from './slices/jobExperience'
import { projectsSlice } from './slices/projects'
import { skillsSlice } from './slices/skills'
import { aboutSlice } from './slices/about'

export const store = configureStore({
    reducer: {
        mainInfo: mainInfoSlice.reducer,
        jobExperience: jobExperienceSlice.reducer,
        projects: projectsSlice.reducer,
        project: projectsSlice.reducer,
        skills: skillsSlice.reducer,
        about: aboutSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch