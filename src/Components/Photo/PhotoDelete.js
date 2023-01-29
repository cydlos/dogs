import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import Modal from "../Helper/Modal";

const PhotoDelete = ({ id }) => {
  const [modal, setModal] = React.useState(false);
  const { loading, request } = useFetch();
  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      { loading? <button className={styles.delete} disabled>
        Deletar foto
      </button> : <button onClick={handleClick} className={styles.delete}>
        Deletar foto
      </button> }
    </>
  );
};

export default PhotoDelete;
