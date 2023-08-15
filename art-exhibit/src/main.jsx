import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import withRoutes from './state/withRoutes.jsx'

const RoutedApp = withRoutes(App)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutedApp />
  </React.StrictMode>,
)
