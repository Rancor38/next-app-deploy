// this is the parent app component that renders what is present

import NavBar from '../components/navBar'
import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* your page */}
      <NavBar/>
      <Component {...pageProps} />
      {/* your other page */}
    </>
  )
}

export default MyApp
