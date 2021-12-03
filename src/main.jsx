import React from 'react'
import ReactDOM from 'react-dom'


import { Provider } from 'react-redux';
import store from './Redux/Store';
import Counter from "../src/Application/counter/Component"
import MultiplierApp from "./Application/multiplier/Component"
// import Home from "./Application/counter/Home"

import App from "./App"

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
