import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CVApp } from './CVApp'
import { store } from './store'
import { Provider } from 'react-redux'

import './styles.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <CVApp />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
