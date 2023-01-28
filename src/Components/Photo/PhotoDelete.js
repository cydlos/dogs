import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../api";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  async function handleClick(event) {
    event.preventDefault();
    const { url, options } = PHOTO_DELETE(id);
    const { response } = await request(url, options);
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.delete}>
        Deletar
      </button>
      ;
    </div>
  );
};

export default PhotoDelete;
