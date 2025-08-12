import React from 'react'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Rest Countries</h1>
        <div className={styles.controls}>
          {/* language switcher & search may go here later */}
        </div>
      </div>
    </header>
  )
}

export default Header