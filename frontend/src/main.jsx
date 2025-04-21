import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

import UserContextProvider from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
 <UserContextProvider>
   <BrowserRouter>
  <Toaster/>
    <App />
  </BrowserRouter>
 </UserContextProvider>
)
