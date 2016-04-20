import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore (initialState = {}) {
  let middlewares = applyMiddleware(thunk)

  // if (__DEV__) {
  middlewares = compose(middlewares, window.devToolsExtension
    ? window.devToolsExtension()
    : (f) => f
  )
  // }

  const store = middlewares(createStore)(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
