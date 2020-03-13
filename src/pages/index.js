import React, { useState } from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Padlock from "../components/padlock"

import "./index.css"

const IndexPage = () => {
  const [riddleAnswer, setRiddleAnswer] = useState('');

  if (riddleAnswer.toLowerCase() === 'sheep') {
    navigate("/tenvictorypointstoquentinandleyla");
  }
  return (
    <div className="container">
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
