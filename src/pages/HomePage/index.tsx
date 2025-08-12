import React from 'react'
import styles from './HomePage.module.scss'
import CountryCard from '../../entities/Country/components/CountryCard'
import { CountryDTO } from '../../entities/Country/types'

// Temporary mock data — we will replace with RTK Query later
const sample: CountryDTO[] = [
  {
    cca3: 'USA',
    name: { common: 'United States', official: 'United States of America' },
    flags: { svg: 'https://flagcdn.com/us.svg' },
    population: 331002651,
    region: 'Americas',
    borders: ['CAN', 'MEX']
  }
]

const HomePage: React.FC = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.controls}>
          {/* Search, filter, sort controls go here later */}
        </section>

        <section className={styles.grid}>
          {sample.map(c => (
            <CountryCard key={c.cca3} country={c} displayName={c.name.common} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default HomePage