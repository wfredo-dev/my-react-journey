import React from "react";
import { useState } from "react";
const Movies = () => {
  const [movie, setMovie] = useState({
    title: "Spider Man",
    ratings: 7,
  });
  const handleClick = () => {
    const rating = document.getElementById("rating").value;
    console.log(typeof rating);
    if (parseFloat(rating)) {
      setMovie({ ...movie, ratings: rating });
      document.getElementById("rating").value = "";
    } else {
      alert("Input only numbers.");
    }
  };
  return (
    <section>
      <div>
        <h1 style={{ fontSize: "3rem" }}>My Favorite Movie</h1>
        <h1>Title:{movie.title}</h1>
        <p>Ratings:{movie.ratings}</p>
        <input type="text" id="rating" placeholder="ex.9" />
        <button onClick={handleClick}>Change ratings</button>
      </div>
    </section>
  );
};

export default Movies;
