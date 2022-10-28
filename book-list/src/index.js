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
    <section>
      <Book />
      <Image />
      <Title />
      <Author />
    </section>
  );
}

const Book = () => {
  return <article>This is a book</article>;
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
