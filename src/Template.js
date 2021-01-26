import React from "react";

function Template({ noun, noun2, adjective, color }) {
  const submit = (e) => {
    e.preventDefault();
    noun = "";
    noun2 = "";
    adjective = "";
    color = "";
  };

  return (
    <div>
      <form>
        <h1>
          {" "}
          There was a {color} {noun} who loved a {adjective} {noun2}{" "}
        </h1>
        <button type="submit" onSubmit={submit}>
          Restart
        </button>
      </form>
    </div>
  );
}

export default Template;