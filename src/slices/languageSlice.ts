import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Language = 'en' | 'ru'

interface LanguageState {
  currentLanguage: Language
}

const getInitialLanguage = (): Language => {
  const saved = localStorage.getItem('language')
  return (saved as Language) || 'en'
};

const initialState: LanguageState = {
  currentLanguage: getInitialLanguage(),
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload
      localStorage.setItem('language', action.payload)
    },
  },
});

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer
