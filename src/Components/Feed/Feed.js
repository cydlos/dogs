import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = ({user}) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  React.useEffect(() => {
    window.addEventListener('wheel') 
  })

  return (
    <div>
      {modalPhoto && (
        <FeedModal user={user} photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
