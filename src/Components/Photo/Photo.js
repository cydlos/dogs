import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <div>{error}</div>;

  if (loading) return <div>Loading...</div>;

  if (data) return <div>{id}</div>;
};

export default Photo;
