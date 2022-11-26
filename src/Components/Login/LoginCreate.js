import React from "react";
import { Link } from "react-router-dom";


const LoginCreate = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Usuário" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <Link>Cadastrar</Link>
      </form>
    </section>
  );
};

export default LoginCreate;
