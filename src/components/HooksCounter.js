import React, { useState } from "react";

export default function HooksCounter(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="greeting">
        <h1>
            Hello {props.name}!
            I'm a functional component with hooks!
        </h1>
        <h2>You clicked {count} times</h2>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            Increment Counter
        </button>
    </div>
  );
}