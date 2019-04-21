import React from "react";

const ResultItem = (props) => {
  const { data } = props;
  return(
    <div className="item">
      <img src={data.urls.regular} alt={data.alt_description} />
    </div>
  )
}

export default ResultItem;