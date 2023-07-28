import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CVApp } from './CVApp'

import './styles.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <CVApp />
        </BrowserRouter>
    </React.StrictMode>,
)
