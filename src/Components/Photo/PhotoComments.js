import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);
  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author} </b>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} />}
    </div>
  );
};

export default PhotoComments;
