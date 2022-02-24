import '../styles/globals.css'
import '../styles/app.css'
function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
