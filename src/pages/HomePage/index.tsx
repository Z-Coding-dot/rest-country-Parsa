import React, { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useGetAllCountriesQuery } from '../../api/countriesApi'
import type { CountryDTO } from '../../types/Country'
import CountryCard from '../../components/CountryCard'
import CountrySearch from '../../components/CountrySearch'
import CountryFilter from '../../components/CountryFilter'
import CountrySort from '../../components/CountrySort'
import styles from './HomePage.module.scss'

const HomePage: React.FC = () => {
  const { t } = useTranslation()
  const currentLanguage = useSelector((state: { language: { currentLanguage: 'en' | 'ru' } }) => state.language.currentLanguage)
  
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none')
  
  const { data: countries = [], isLoading, error } = useGetAllCountriesQuery()

  const getDisplayName = (country: CountryDTO) => {
    if (currentLanguage === 'ru' && country.translations?.rus?.official) {
      return country.translations.rus.official
    }
    return country.name.official
  }

  const filteredAndSortedCountries = useMemo(() => {
    let filtered = countries

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(country => 
        getDisplayName(country).toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by region
    if (selectedRegion !== 'All') {
      filtered = filtered.filter(country => country.region === selectedRegion)
    }

    // Sort by population
    if (sortOrder !== 'none') {
      filtered = [...filtered].sort((a, b) => {
        const popA = a.population || 0
        const popB = b.population || 0
        return sortOrder === 'asc' ? popA - popB : popB - popA
      })
    }

    return filtered
  }, [countries, searchQuery, selectedRegion, sortOrder, currentLanguage])

  if (isLoading) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.loading}>{t('loading')}</div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.error}>{t('error')}</div>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.controls}>
          <div className={styles.controlsRow}>
            <CountrySearch onSearch={setSearchQuery} />
            <div className={styles.filters}>
              <CountryFilter 
                onFilterChange={setSelectedRegion} 
                selectedRegion={selectedRegion} 
              />
              <CountrySort 
                onSortChange={setSortOrder} 
                currentSort={sortOrder} 
              />
            </div>
          </div>
        </section>

        <section className={styles.grid}>
          {filteredAndSortedCountries.map(country => (
            <CountryCard 
              key={country.cca3} 
              country={country} 
              displayName={getDisplayName(country)} 
            />
          ))}
        </section>
        
        {filteredAndSortedCountries.length === 0 && (
          <div className={styles.noResults}>
            No countries found matching your criteria.
          </div>
        )}
      </div>
    </main>
  )
}

export default HomePage