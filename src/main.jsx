import React from 'react'
import ReactDOM from 'react-dom/client'
import router from "./routes/Routes";
import './index.css'

import { RouterProvider } from "react-router-dom";
import AuthProvider from './providers/AuthProvider';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='mx-1 md:mx-auto md:max-w-7xl'>
  <AuthProvider>
  
  <RouterProvider router={router} />
  
  </AuthProvider>
  </div>
  </React.StrictMode>,
)
