import { createSlice } from '@reduxjs/toolkit'

const langSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'RU',
  },
  reducers: {
    changeLanguage: (state) => {
      state.value = state.value === 'RU' ? 'EN' : 'RU'
    },
  },
})
export const { changeLanguage } = langSlice.actions
export default langSlice.reducer
