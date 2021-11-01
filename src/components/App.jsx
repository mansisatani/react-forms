import React from "react";

function App() {
  function handelChange() {
    console.log("changed");
  }

  return (
    <div className="container">
      <h1>Hello </h1>
      <input
        onChange={handelChange}
        type="text"
        placeholder="What's your name?"
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
