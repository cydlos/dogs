import React from "react";
import { Link } from "react-router-dom";
import styles from "./PhotoContent.module.css";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
        <div className={styles.details}>
          <p>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoContent;
