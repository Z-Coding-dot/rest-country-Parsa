import React from 'react'
import styles from './CountryCard.module.scss'
import type { CountryDTO } from '../types/Country'
import { Link } from 'react-router-dom'

interface Props {
  country: CountryDTO
  displayName: string
}

const CountryCard: React.FC<Props> = ({ country, displayName }) => {
  const formatPopulation = (population: number) => {
    return new Intl.NumberFormat().format(population)
  }

  return (
    <article className={styles.card}>
      <Link to={`/country/${country.cca3}`} className={styles.link}>
        <div className={styles.flagWrap}>
          <img 
            src={country.flags.svg || country.flags.png} 
            alt={`${displayName} flag`}
            className={styles.flag}
          />
        </div>
        <div className={styles.body}>
          <h3 className={styles.name}>{displayName}</h3>
          <div className={styles.meta}>
            <p className={styles.region}>{country.region}</p>
            {country.population && (
              <p className={styles.population}>
                Population: {formatPopulation(country.population)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}

export default CountryCard
