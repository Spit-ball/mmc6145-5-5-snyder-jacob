import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yummy!</title>
        <meta name="description" content="Yummy is a recipe-finding app." />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍴</text></svg>"/>
      </Head>
      <main>
        <div className={styles.container}>
          <h1>Hey there, Welcome to Yummy!</h1>
          <section className={styles.jumbo}>
            <Image src="/food.jpg" className={styles.foodImg} alt="food on a table" width="1200" height="900"/>
            <p>Find a Recipe. Cook Something. <em>Yum.</em></p>
          </section>
        </div>
        <section className={styles.goSearch}>
          <p>Why don't you go ahead and find something to make tonight?</p>
          <Link href="/search" className="button">Search For a Recipe</Link>
        </section>
      </main>
    </>
  )
}
