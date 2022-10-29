import React from "react";
import ReactDom from "react-dom";

import "./index.css";

function BookList() {
  //could have multiple components of same type
  /*
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
  */
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <h2>This is a book</h2>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/41WTatssdDL._SX311_BO1,204,203,200_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h1>The War Of Art</h1>;
};

const Author = () => {
  return <h4>Steven Pressfield</h4>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
