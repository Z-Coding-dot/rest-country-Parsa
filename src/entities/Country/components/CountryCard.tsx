import React from 'react'
import styles from './CountryCard.module.scss'
import { CountryDTO } from '../types'
import { Link } from 'react-router-dom'

interface Props {
  country: CountryDTO
  displayName: string
}

const CountryCard: React.FC<Props> = ({ country, displayName }) => {
  return (
    <article className={styles.card}>
      <Link to={`/country/${country.cca3}`} className={styles.link}>
        <div className={styles.flagWrap}>
          <img src={country.flags.svg || country.flags.png} alt={`${displayName} flag`} />
        </div>
        <div className={styles.body}>
          <h3 className={styles.name}>{displayName}</h3>
          <p className={styles.meta}>{country.region}</p>
        </div>
      </Link>
    </article>
  )
}

export default CountryCard