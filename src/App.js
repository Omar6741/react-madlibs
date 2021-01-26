import './App.css';
import React, { useState } from "react";
import Field from "./Field";
import Template from "./Template";

export default function App({ noun, noun2, adjective, color }) {
  const [textOfNoun, setTextOfNoun] = useState("");
  const [textOfNoun2, setTextOfNoun2] = useState("");
  const [textOfAdjective, setTextOfAdjective] = useState("");
  const [textOfColor, setTextOfColor] = useState("");
  const [answers, setAnswers] = useState(['', '', '', '']);

const handleSubmit = (e) => {
e.preventDefault();
setAnswers([textOfNoun, textOfNoun2, textOfAdjective, textOfColor]);
}

  

  return (

 (answers[0].length*answers[1].length*answers[2].length*answers[3].length === 0)  ?

      <div>
      <h1> Madlibs</h1>
      <form onSubmit = {handleSubmit}>
        <Field 
        label="noun" 
        onChange={setTextOfNoun} 
        value={textOfNoun} />
        <hr />
        <Field 
        label="noun2" 
        onChange={setTextOfNoun2} 
        value={textOfNoun2} />
        <hr />
        <Field
        label="adjective"
        onChange={setTextOfAdjective}
        value={textOfAdjective}
        />
        <hr />
        <Field 
        label="color" 
        onChange={setTextOfColor} 
        value={textOfColor} />
        <hr /> 
        <button type="submit"> Click Me! </button>
      </form>
     </div>
      
      :
      
      <div>
      <h1> Madlibs</h1>
      <Template
      noun= {answers[0]}
      noun2= {answers[1]}
      adjective= {answers[2]}
      color= {answers[3]}
      />
      </div> 
  );
}
