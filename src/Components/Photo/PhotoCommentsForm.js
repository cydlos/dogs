// import React from "react";
// import { COMMENT_POST } from "../../api";
// import useFetch from "../../Hooks/useFetch";
// import Error from "../Helper/Error";
// import styles from "./PhotoCommentsForm.module.css";
//
// const PhotoCommentsForm = (props) => {
//   const [comment, setComment] = React.useState("");
//   const { request, error } = useFetch();
//
//   async function handleSubmit(event) {
//     event.preventDefault();
//     const { url, options } = COMMENT_POST(props.id, { comment
//     });
//     const { response } = await request(url, options);
//     if (response.ok) setComment("");
//   }
//
//   return (
//     <form onSubmit={handleSubmit} className={`${styles.form} animeLeft`}>
//       <textarea
//         id="comment"
//         name="comment"
//         placeholder="Comente..."
//         className={styles.textarea}
//         value={comment}
//         onChange={({ target }) => setComment(target.value)}
//       ></textarea>
//       <button className={styles.button}>Enviar</button>
//       <Error error={error} />
//     </form>
//   );
// };
//
// export default PhotoCommentsForm;
