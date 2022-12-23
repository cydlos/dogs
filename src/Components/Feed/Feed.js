import React from 'react'
import FeedModal from './FeedModal'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from './Feed.module.css'

// posts photos in the feed directly from UserPhotoPost

const Feed = () => {
  return <div>
    <FeedModal />
    <FeedPhotos />
  </div>
}

export default Feed
