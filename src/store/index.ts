import { configureStore } from '@reduxjs/toolkit'
import { countriesApi } from '../api/countriesApi'
import languageSlice from '../slices/languageSlice'

export const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
    language: languageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
