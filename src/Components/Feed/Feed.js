import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  React.useEffect(() => {
    function infiniteScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      console.log("Fim da página");
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, []);

  return (
    <div>
      {modalPhoto && (
        <FeedModal
          user={user}
          photo={modalPhoto}
          setModalPhoto={setModalPhoto}
        />
      )}
      <FeedPhotos user={user} page='1' setModalPhoto={setModalPhoto} />
      <FeedPhotos user={user} page='2' setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
