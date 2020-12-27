import React from "react";
import "./styles.css";
import { useState } from "react";

const MovieDB = {
  Bollywood: [
    { name: "Ramleela", rating: "4/5" },
    { name: "Padmavat", rating: "3.5/5" }
  ],

  Hollywood: [
    {
      name: "Inception",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    }
  ],

  WebSeries: [
    {
      name: "vampire diaries",
      rating: "3.5/5"
    },
    {
      name: "mirzapur",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("WebSeries");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎥 Movies</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(MovieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {MovieDB[selectedGenre].map((Movie) => (
            <li
              key={Movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {Movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {Movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
