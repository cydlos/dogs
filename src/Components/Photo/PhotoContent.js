import React from "react";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        {" "}
        <img src={photo} alt="" />{" "}
      </div>
    </div>
  );
};

export default PhotoContent;
