import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../Hooks/useForm";

const UserPhotoPost = () => {
    const nome = useForm();
    const peso = useForm();
    const idade = useForm();

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleImgChange() {
    }

    return (
    <section className={` ${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="Nome" />
        <Input label="Peso" type="text" name="Peso" />
        <Input label="Idade" type="text" name="Idade" />
        <Input type="file" name="img" id="img" onChange={handleImgChange}/>
        <Button>Enviar</Button>
      </form>
    </section>
  );
};

export default UserPhotoPost;
