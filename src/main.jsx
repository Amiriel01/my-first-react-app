import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
//defalt export syntax//
// import Greeting from './Greetings'
//not default export syntax//
import { Greeting } from "./Greetings"
import { Activity1 } from "./Activity1"
import Animals from "./Animals"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Animals />
  </React.StrictMode>,
)