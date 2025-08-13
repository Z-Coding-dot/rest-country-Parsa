import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './CountrySort.module.scss'

interface Props {
  onSortChange: (sortOrder: 'asc' | 'desc' | 'none') => void
  currentSort: 'asc' | 'desc' | 'none'
}

const CountrySort: React.FC<Props> = ({ onSortChange, currentSort }) => {
  const { t } = useTranslation()

  const handleSort = () => {
    if (currentSort === 'none') {
      onSortChange('desc')
    } else if (currentSort === 'desc') {
      onSortChange('asc')
    } else {
      onSortChange('none')
    }
  }

  return (
    <div className={styles.sort}>
      <button
        onClick={handleSort}
        className={`${styles.button} ${styles[currentSort]}`}
      >
        {t('sort.population')}
        <span className={styles.icon}>
          {currentSort === 'desc' && '↓'}
          {currentSort === 'asc' && '↑'}
          {currentSort === 'none' && '↕'}
        </span>
      </button>
    </div>
  )
}

export default CountrySort
