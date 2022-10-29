//This code is when you want to use Javascript code in JSX part of components
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

const author = "Steven Pressfield";
const title = "The War of Art";

// {} is being used wherever JS needs to be used within JSX. You can use any functions as well. Like author.toUpperCase() on string
// with this capability, we can make our React much more dynamic by adding JS to components. This is very powerful

// JS code in JSX must always return a value. It cannot be a simple statement.

//<p>{let x = 6}</p> is an error
//<p>{6+6}</p> is fine because it returns 12
const Book = () => {
  return (
    <article className="book">
      <h2>This is a book</h2>
      <img
        src="https://m.media-amazon.com/images/I/41WTatssdDL._SX311_BO1,204,203,200_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{/*let x = 6*/}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
