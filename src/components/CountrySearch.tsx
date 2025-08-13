import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './CountrySearch.module.scss'

interface Props {
  onSearch: (query: string) => void
}

const CountrySearch: React.FC<Props> = ({ onSearch }) => {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm, onSearch])

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder={t('search.placeholder')}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.input}
      />
    </div>
  )
}

export default CountrySearch
