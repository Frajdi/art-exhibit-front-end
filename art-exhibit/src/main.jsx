import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { withContext } from './state/AppContext.jsx'

const ContextedApp = withContext(App)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextedApp />
  </React.StrictMode>,
)
