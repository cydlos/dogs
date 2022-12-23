import React from 'react'
import FeedModal from './FeedModal'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from './Feed.module.css'

// posts photos in the feed directly from UserPhotoPost

const FeedPhotos = ({ posts, setModalPhoto }) => {
  return (
    <ul className='feedPhotos'>
      {posts.map((post) => (
        <li key={post.id} onClick={() => setModalPhoto(post)}>
          <img src={post.src + '?w=500'} alt={post.title} />
          <span className='visualizacoes'>{post.acessos}</span>
        </li>
      ))}
    </ul>
  )
}

export default FeedPhotos
