import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({
  weight: ['300', '400', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

function MyApp({ Component, pageProps }) {
  return <div className={[openSans.className, "app-container"].join(" ")}>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
}

export default MyApp
