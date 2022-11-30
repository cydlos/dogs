import React from 'react'
import { UserContext } from '../../UserContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const {login} = React.useContext(UserContext)
  return  login ? children : <Navigate to="/login" />;
  // verifica se o usuário está logado;
  // se estiver, envia o usuário para a página User, área protegida
  // se não estiver, envia o usuário para a página de login;

}

export default ProtectedRoute
