import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'
import { store } from './store'
import { getENVVariables } from './helpers'

export const CalendarApp = () => {

  console.log(getENVVariables());
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
  )
}
