import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import AuthContextProvider from './context/AuthContext.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthContextProvider>
      <BrowserRouter>
        <Toaster />
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </Provider>
)
