/**
 * Created by deegha on 03/10/2018
 */


import React from 'react'

import thunkMiddleware from "redux-thunk"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { rootReducer } from './src/reducers/rootReducer'
import { RootStack } from './routerStack'

const store = createStore(rootReducer,  applyMiddleware(thunkMiddleware))

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>  
    )
  }
}


