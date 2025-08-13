import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('app.title')}</h1>
        <div className={styles.controls}>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
