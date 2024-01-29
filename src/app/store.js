import { configureStore } from '@reduxjs/toolkit'
import langReducer from '../features/langSlice'

export default configureStore ({
    reducer: {
        language: langReducer,
    },
})