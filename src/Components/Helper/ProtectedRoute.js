import React from 'react'
import { UserContext } from '../../UserContext'

const ProtectedRoute = () => {
  const {login} = React.useContext(UserContext)
  return  login ? <Route {...props} /> : <Navigate to="/login" />;

}

export default ProtectedRoute
