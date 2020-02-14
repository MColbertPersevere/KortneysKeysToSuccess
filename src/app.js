import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/scss/bootstrap.scss'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.css'
import AppRouter from './router/AppRouter'

ReactDOM.render(<AppRouter />, document.querySelector('#app'))