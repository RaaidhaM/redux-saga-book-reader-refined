import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './app/storage'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* Connecting the App to the redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)