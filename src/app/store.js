import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import langReducer from '../features/langSlice'

export default configureStore ({
    reducer: {
        counter: counterReducer,
        language: langReducer,
    },
})