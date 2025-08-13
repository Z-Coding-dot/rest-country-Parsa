import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './CountryFilter.module.scss'

interface Props {
  onFilterChange: (region: string) => void
  selectedRegion: string
}

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

const CountryFilter: React.FC<Props> = ({ onFilterChange, selectedRegion }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.filter}>
      <select
        value={selectedRegion}
        onChange={(e) => onFilterChange(e.target.value)}
        className={styles.select}
      >
        {regions.map((region) => (
          <option key={region} value={region}>
            {region === 'All' ? t('filter.region') : region}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CountryFilter
