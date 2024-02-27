import { configureStore } from '@reduxjs/toolkit'
import langReducer from '../features/langSlice'
import themeReducer from '../features/themeSlice'

export default configureStore({
  reducer: {
    language: langReducer,
    theme: themeReducer,
  },
})
