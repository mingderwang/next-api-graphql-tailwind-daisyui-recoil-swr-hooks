import './styles/globals.css' // should not in _document.js

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
  }
  export default MyApp