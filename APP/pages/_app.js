import "../styles/main.css"
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { BrowserRouter as Router } from "react-router-dom"
function MyApp({ Component, pageProps }) {
  return( <Provider  store={ store } >
    
    <div suppressHydrationWarning>
   {typeof window === 'undefined' ? null : <Router><Component {...pageProps} /></Router> }
   </div>
</Provider>)
}

export default MyApp
