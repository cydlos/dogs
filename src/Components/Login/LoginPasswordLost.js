import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  async function handleSubmit (event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: "http://localhost:3000/login/resetar",
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Email / Usuário" type="text" name="email" {...login} />
        <Button> Enviar email </ Button>
      </form>
    </section>
  );
};

export default LoginPasswordLost;
