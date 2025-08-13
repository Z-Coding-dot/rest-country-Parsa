import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useGetCountryByCodeQuery } from '../../api/countriesApi'
import type { CountryDTO } from '../../types/Country'
import styles from './CountryDetailPage.module.scss'

const CountryDetailPage: React.FC = () => {
  const { code } = useParams<{ code: string }>()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const currentLanguage = useSelector((state: { language: { currentLanguage: 'en' | 'ru' } }) => state.language.currentLanguage)
  
  const { data: country, isLoading, error } = useGetCountryByCodeQuery(code || '')

  const getDisplayName = (country: CountryDTO) => {
    if (currentLanguage === 'ru' && country.translations?.rus?.official) {
      return country.translations.rus.official
    }
    return country.name.official
  }

  const formatPopulation = (population: number) => {
    return new Intl.NumberFormat().format(population)
  }

  if (isLoading) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.loading}>{t('loading')}</div>
        </div>
      </div>
    )
  }

  if (error || !country) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.error}>{t('error')}</div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <button onClick={() => navigate('/')} className={styles.backButton}>
          ← {t('back')}
        </button>
        
        <div className={styles.content}>
          <div className={styles.flagSection}>
            <img 
              src={country.flags.svg || country.flags.png} 
              alt={`${getDisplayName(country)} flag`}
              className={styles.flag}
            />
          </div>
          
          <div className={styles.infoSection}>
            <h1 className={styles.title}>{getDisplayName(country)}</h1>
            
            <div className={styles.details}>
              <div className={styles.detail}>
                <strong>{t('country.population')}:</strong> {formatPopulation(country.population || 0)}
              </div>
              <div className={styles.detail}>
                <strong>{t('country.region')}:</strong> {country.region}
              </div>
              {country.capital && country.capital.length > 0 && (
                <div className={styles.detail}>
                  <strong>{t('country.capital')}:</strong> {country.capital.join(', ')}
                </div>
              )}
            </div>
            
            {country.borders && country.borders.length > 0 && (
              <div className={styles.borders}>
                <h3>{t('country.borders')}:</h3>
                <div className={styles.borderList}>
                  {country.borders.map((borderCode) => (
                    <button
                      key={borderCode}
                      onClick={() => navigate(`/country/${borderCode}`)}
                      className={styles.borderButton}
                    >
                      {borderCode}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetailPage
