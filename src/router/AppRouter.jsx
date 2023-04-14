import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { CalendarPage } from '../caldendar';

export const AppRouter = () => {

    // const authStatus = 'not-authenticated';
    const authStatus = 'authenticated';

  return (
    <Routes>
        {
            ( authStatus === 'not-authenticated' )
                ?  <Route path='/auth/*' element={ <LoginPage/>}/>
                :  <Route path='/*' element={ <CalendarPage/>}/>
        }
        {/* esta dioquis codigo de abajo*/}
        <Route path='/*' element={ <Navigate to={"auth/login"}/> }/>
    </Routes>
  )
}
