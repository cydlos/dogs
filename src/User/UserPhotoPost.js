import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import useForm from "../Hooks/useForm";
import Button from "../Forms/Button";
import useFetch from "../Hooks/useFetch";
import { PHOTO_POST } from "../../api";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");

  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    // não pode ser um json pois inclui um arquivo de imagem, por isso é Form Data

    const token = window.localStorage.getItem("token");

    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={` ${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome}/>
        <Input label="Peso" type="text" name="peso" {...peso}/>
        <Input label="Idade" type="text" name="idade" {...idade} />
        <Input type="file" name="img" id="img" onChange={handleImgChange} />
        <Button>Enviar</Button>
      </form>
    </section>
  );
};

export default UserPhotoPost;
