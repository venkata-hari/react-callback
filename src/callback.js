import React from "react";
import "./App.css";
const callback = ({ pre, nxt, Text }) => {
  console.log("call back");
  return (
    <div className="slider">
      <div>
        <section>
          <button onClick={pre}>Pre</button>
          <button onClick={nxt}>Next</button>
        </section>
        <section>
          <h1 style={{ color: Text.color }}>{Text.txt}</h1>
          <img src={Text.photo} alt={Text.txt} className={Text.id} />
        </section>
      </div>
    </div>
  );
};
export default callback;
