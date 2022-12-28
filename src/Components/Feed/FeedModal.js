import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";

const FeedModal = ({ photo }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTOS_GET({ id: photo.id });
    request(url, options);
  }, [photo, request]);

  return (
  <div className={styles.modal}></div>
  );
};

export default FeedModal;
