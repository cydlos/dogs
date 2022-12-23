import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

const FeedPhotos = () => {

  const {data, error, loading, request} = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0});
      // user 0 porque não vai puxar de nenhum usuário específico.
      const {response, json} = await request (url, options) }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) return <p>Foto carregada!</p>;


  return (
    <div>
      <FeedPhotosItem />
    </div>
  );
};

export default FeedPhotos;
