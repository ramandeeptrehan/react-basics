/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

import React from "react"; //ES6 module imported
//no need to mentioned path like ../../react since react is available in node_modules folder.
//if you need to point to a local file, then use path like ../../xyz
import ReactDom from "react-dom";

//this is a component. Use capital case for first letter for React to know it's a component
function Greeting() {
  /*
    JSX rules:
    return single element
    div/section/article or Fragment (div, section, article are core html tags. React provides Fragment tag. That can be used by <React.Fragment></React.Fragment> or <></>)
    use camelCase for html attribute
    use className instead of class
    close every element
    formatting: always use: return (some html code here); //this improves your code readability.
  */
  //return <h1>This is Raman and this is my first component</h1>;
  /*
  return (
    <div>
      <h1>Hello World Oye</h1>
    </div>
  );
  */

  //nested components
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => {
  return <h2>I am Raman</h2>;
};

const Message = () => {
  return <p>This is my message</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
