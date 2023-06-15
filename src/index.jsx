import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import i18n from './i18n.js';
import AppBar from './components/AppBar/AppBar.jsx';
import App from './components/App.jsx'
import Footer from './components/Footer/Footer.jsx';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppBar/>
          <App/>
        <Footer/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
