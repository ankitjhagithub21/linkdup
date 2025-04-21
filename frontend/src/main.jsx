import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import AuthContextProvider from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <BrowserRouter>
      <Toaster />
      <App />
    </BrowserRouter>
  </AuthContextProvider>
)
