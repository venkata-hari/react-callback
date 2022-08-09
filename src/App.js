import React, { useState } from "react";
import Callback from "./callback";
export default function App() {
  const [text, setText] = useState({
    txt: "1/4",
    color: "red",
    photo: require("./images/books.png"),
    id: "next"
  });
  const next = () => {
    switch (true) {
      case text.txt === "1/4":
        setText({
          txt: "2/4",
          color: "green",
          photo: require("./images/contact.png"),
          id: "next2"
        });
        break;
      case text.txt === "2/4":
        setText({
          txt: "3/4",
          color: "blue",
          photo: require("./images/donate.png"),
          id: "next3"
        });
        break;
      case text.txt === "3/4":
        setText({
          txt: "4/4",
          color: "brown",
          photo: require("./images/follow.png"),
          id: "next4"
        });
        break;
      default:
        setText({
          txt: "1/4",
          color: "red",
          photo: require("./images/books.png"),
          id: "next1"
        });
        break;
    }
  };

  const pre = () => {
    switch (true) {
      case text.txt === "1/4":
        setText({
          txt: "4/4",
          color: "brown",
          photo: require("./images/follow.png"),
          id: "pre4"
        });
        break;
      case text.txt === "4/4":
        setText({
          txt: "3/4",
          color: "blue",
          photo: require("./images/donate.png"),
          id: "pre3"
        });
        break;
      case text.txt === "3/4":
        setText({
          txt: "2/4",
          color: "green",
          photo: require("./images/contact.png"),
          id: "pre2"
        });
        break;
      default:
        setText({
          txt: "1/4",
          color: "red",
          photo: require("./images/books.png"),
          id: "pre1"
        });
        break;
    }
  };
  return (
    <>
      <Callback pre={pre} nxt={next} Text={text} />
    </>
  );
}
