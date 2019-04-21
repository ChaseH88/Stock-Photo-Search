import React, { useState } from "react";
import axios from "axios";

const Search = (props) => {
  const [input, setInput] = useState("");

  function updateSearch(e){
    setInput(e.target.value);
  }

  function submitForm(e){
    e.preventDefault();
    // Get the data
    const path = "https://api.unsplash.com/search/photos";
    const getData = async () => {
      try {
          const res = await axios.get(path, {
            params: {
              query: input
            },
            headers: {
              Authorization: `Client-ID 730d019431f64fe9de5e5b72a841479ffade0a497aa19a17a538d6c034e1a416`
            }
          });
          const { results } = res.data;
          return results;
      } catch (err) {
          console.error(err);
      }
    };
    const response = Promise.resolve(getData());
    // Resolve the promise and pass the data back
    response.then(function(value) {
      props.set(value);
    });
  }

  function checkEmpty(e){
    if(e.keyCode === 13 && input.length === 0) {
      e.preventDefault();
      errorMessage(true);
    } else {
      errorMessage(false);
    }
  }

  function errorMessage(status){
    let error = document.querySelector("span.error");
    let message = "You haven't entered anything.";
    status ?
      error.innerHTML = message :
      error.innerHTML = ""
  }

  return(
    <form onSubmit={submitForm}>
      <label>Search For An Image!</label>
      <input type="text"
        onChange={(e) => updateSearch(e)}
        onKeyDown={(e) => checkEmpty(e)}
      />
      <span className="error"></span>
      {(input.length > 0) && <button>Go!</button>}
    </form>
  )
}

export default Search;