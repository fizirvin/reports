import React from 'react'
import { withRouter } from 'react-router-dom'
import Login from './login'

const Home = ({ history }) => {
  const logoutHandler = () => {
    history.replace('/')
    // dispatch({ type: actions.USER_LOGOUT })
    localStorage.removeItem('token')
    localStorage.removeItem('expiryDate')
    localStorage.removeItem('userId')
  }

  const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      logoutHandler()
    }, milliseconds)
  }

  const setAuthHandler = ({ token, userId, name }) => {
    localStorage.setItem('token', token)
    localStorage.setItem('userId', userId)
    localStorage.setItem('name', name)
    const remainingMilliseconds = 60 * 60 * 1000
    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds)
    localStorage.setItem('expiryDate', expiryDate.toISOString())
    setAutoLogout(remainingMilliseconds)
    history.replace('/')
  }

  return <Login setAuthHandler={setAuthHandler} />
}

export default withRouter(Home)
