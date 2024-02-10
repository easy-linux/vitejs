import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'

import '@styles/main.scss'
import MainComponent from '@components/MainComponent'

const component = MainComponent('Another one: ')

document.querySelector('body').appendChild(component);
const root = document.getElementById('root');
console.log(root, App)

ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  

