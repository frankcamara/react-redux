import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const rootEl = document.getElementById('root')
const store = configureStore()

let render = () => {
  ReactDOM.render(
    <Root store={store} />,
    rootEl
  )
}

if (module.hot) {
  const renderApp = render
  const renderError = (err) => {
    const RedBox = require('redbox-react')
    ReactDOM.render(
      <RedBox error={err} />,
      rootEl
    )
  }
  render = () => {
    try {
      renderApp()
    } catch (err) {
      renderError(err)
    }
  }
  module.hot.accept(this, render)
}

render()
