import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + " | Dogs" ;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description || "");
  }, [props]);
  return (
    <div className="head">
      <title> Título da página </title>
      <meta name="description" content="Descrição da página" />
    </div>
  );
};

export default Head;
