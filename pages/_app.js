import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Image from 'next/image'
function MyApp({ Component, pageProps }) {
  return <><Navbar/><Component {...pageProps} /><Footer/></>
}

export default MyApp
