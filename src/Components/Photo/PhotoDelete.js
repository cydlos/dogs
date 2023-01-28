import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import Modal from "../Helper/Modal";

const PhotoDelete = ({ id }) => {
  const { loading, request, error, modal } = useFetch();
  async function handleClick(event) {
    event.preventDefault();
    const { url, options } = PHOTO_DELETE(id);
    const { response } = await request(url, options);
    if (response.ok) window.location.reload();
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.delete}>
        Deletar foto
      </button>
      {loading && <Loading />}
      <Error error={error} />
      <Modal open={modal} onClose={() => setModal(false)}>
        <div className={styles.modal}>
          <p>Tem certeza que deseja deletar?</p>
          <button className={styles.delete} onClick={handleClick}>
            Deletar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PhotoDelete;
