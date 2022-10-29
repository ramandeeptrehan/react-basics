//this code is when you don't write many components. You club simple things in one component
//NOTE: change this filename to index.js and npm start will run this file
import React from "react";
import ReactDom from "react-dom";

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <h2>This is a book</h2>
      <img
        src="https://m.media-amazon.com/images/I/41WTatssdDL._SX311_BO1,204,203,200_.jpg"
        alt=""
      />
      <h1>The War Of Art</h1>
      <h4>Steven Pressfield</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
