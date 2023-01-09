import React from "react";
import styles from "./photoComments.module.css";


const photoComments = ({ comments }) => (
  <div>
    {comments.map((comment) => (
      <div key={comment.id} className="comment">
        <div className={styles.user}>{comment.user}</div>
        <div className={styles.text}>{comment.text}</div>
      </div>
    ))}
  </div>
);

export default photoComments;
