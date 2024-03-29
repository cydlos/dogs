import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Error from "../Helper/Error";
import { PASSWORD_LOST } from "../../api";
import Head from "../Helper/Head";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      request(url, options);
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{color: "#4c1"}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled> Enviando... </Button>
          ) : (
            <Button> Enviar email </Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
