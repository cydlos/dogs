import React from 'react'

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])
  
  return (
    <section>
      <h1 className="title">Resetar senha</h1>
    </section>
  )
}

export default LoginPasswordReset
