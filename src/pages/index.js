import React, { useState } from "react"
import { navigate } from "gatsby"

import "./index.css"

const IndexPage = () => {
  const [riddleAnswer, setRiddleAnswer] = useState('');

  if (riddleAnswer.toLowerCase() === 'sheep') {
    navigate("/tenvictorypointstoquentinandleyla");
  }
  return (
    <div className="container">
      <img src="/Icon-Padlock-Monochrome.svg" width="200px" />
      <input
        className="input"
        type='text'
        maxLength='5'
        value={riddleAnswer}
        placeholder='*****'
        onChange={
          (e) => {
            setRiddleAnswer(e.target.value)
          }
        }
      /> 
    </div>
  );
}

export default IndexPage
