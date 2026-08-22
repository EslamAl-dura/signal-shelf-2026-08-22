import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes'
import { ThemeProvider } from './theme'
import { I18nProvider } from './i18n'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><ThemeProvider><I18nProvider><RouterProvider router={router} /></I18nProvider></ThemeProvider></React.StrictMode>)
