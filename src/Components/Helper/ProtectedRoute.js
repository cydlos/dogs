import React from 'react'
import { UserContext } from '../../UserContext'

const ProtectedRoute = () => {
  const {login} = React.useContext(UserContext)
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute
