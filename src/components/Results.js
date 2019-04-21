import React from "react";
import ResultItem from "./ResultItem";

const Results = (props) => {

    const { data } = props;
    return(
      <div className="list">
        {data && 
          data.map((item) => {
            return <ResultItem key={item.id} data={item} />
          })
        }
      </div>
    )
}

export default Results;