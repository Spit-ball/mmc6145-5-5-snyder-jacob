import styles from './style.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>Yummy🍴</Link>
        <Link href="/search">Search</Link>
      </div>
    </header>
  )
}