import React from 'react'
import { useParams } from 'react-router-dom'

const Photo = () => {
  const {id} = useParams();
  const {data, loading, error, request} = useFetch();

  React.useEffect(() => {
    async function fetchPhoto() {
      const {url, options} = PHOTOS_GET(id);
      const {response, json} = await request(url, options);
      console.log(json);
    }
    fetchPhoto();
  }, [request, id]);

  return (
    <div>{id}</div>
  )
}

export default Photo
