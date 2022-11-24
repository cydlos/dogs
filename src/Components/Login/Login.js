import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import styles from './LoginForm.module.css'
import { UserContext } from '../../UserContext'

const Login = () => {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to="/conta" />

  return  <section className={styles.login}>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="criar" element={<LoginCreate />} />
      <Route path="perdeu" element={<LoginPasswordLost />} />
      <Route path="resetar" element={<LoginPasswordReset />} />
    </Routes>
  </section>;
}

export default Login
