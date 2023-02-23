import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const LoginPasswordLost = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
  
  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      <form onSubmit={handleSubmit}>
        <Input />
        <Button> Enviar e-mail </ Button>
      </form>
    </section>
  );
};

export default LoginPasswordLost;
