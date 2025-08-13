import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../slices/languageSlice'
import styles from './LanguageSwitcher.module.scss'

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const currentLanguage = useSelector((state: { language: { currentLanguage: 'en' | 'ru' } }) => state.language.currentLanguage)

  useEffect(() => {
    i18n.changeLanguage(currentLanguage)
  }, [currentLanguage, i18n])

  const handleLanguageChange = (language: 'en' | 'ru') => {
    dispatch(setLanguage(language))
  }

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.button} ${currentLanguage === 'en' ? styles.active : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        {t('language.en')}
      </button>
      <button
        className={`${styles.button} ${currentLanguage === 'ru' ? styles.active : ''}`}
        onClick={() => handleLanguageChange('ru')}
      >
        {t('language.ru')}
      </button>
    </div>
  )
}

export default LanguageSwitcher
