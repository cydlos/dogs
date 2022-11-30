import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";

const UserHeaderNav = () => {
  const {UserLogout} = React.useContext(UserContext);

  return (
    <nav>
      <NavLink to="/conta">Minhas Fotos </NavLink>
      <NavLink to="/conta/estatisticas"> Estatísticas </NavLink>
      <NavLink to="/consta/postar"> Adicionar Foto </NavLink>
      <button onClick={UserLogout}> Sair </button>
    </nav>
  );
};

export default UserHeaderNav;
