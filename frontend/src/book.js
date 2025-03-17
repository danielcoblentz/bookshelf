import React from "react";

function Book({ title, author, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3> by {author}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Book;
