import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import withRoutes from './state/withRoutes.jsx'
import { withContext } from './state/AppContext.jsx'

const RoutedApp = withRoutes(App)
const ContextedApp = withContext(RoutedApp)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextedApp />
  </React.StrictMode>,
)
