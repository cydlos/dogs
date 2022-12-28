import React from "react";
import styles from "./FeedModal.module.css";

const FeedModal = ({ photo }) => {
  const { data, loading, error, request } = useFetch();

  return <div className={styles.modal}></div>;
};

export default FeedModal;
