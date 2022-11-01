import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const warOfArtBook = {
  author: "Steven Pressfield",
  title: "The War of Art",
  image:
    "https://m.media-amazon.com/images/I/41WTatssdDL._SX311_BO1,204,203,200_.jpg",
};

const deepWorkBook = {
  author: "Cal Newport",
  title: "Deep Work",
  image: "https://m.media-amazon.com/images/I/51ygINtzhJL.jpg",
};

const author = "Steven Pressfield";
const title = "The War of Art";
const img =
  "https://m.media-amazon.com/images/I/41WTatssdDL._SX311_BO1,204,203,200_.jpg";
function BookList() {
  return (
    <section className="booklist">
      <Book
        author={warOfArtBook.author}
        title={warOfArtBook.title}
        image={warOfArtBook.image}
      />
      <Book
        author={deepWorkBook.author}
        title={deepWorkBook.title}
        image={deepWorkBook.image}
      />
      <Book
        author="random author"
        title="random title"
        image="https://m.media-amazon.com/images/I/71ExdzwqeFL._AC_UY436_FMwebp_QL65_.jpg"
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <h2>This is a book</h2>
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
