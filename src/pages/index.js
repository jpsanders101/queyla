import React, { useState } from "react"
import { navigate } from "gatsby"

import Layout from '../components/Layout'

import "./index.css"

const IndexPage = () => {
  const [riddleAnswer, setRiddleAnswer] = useState('');

  if (riddleAnswer.toLowerCase() === 'sheep') {
    navigate("/tenvictorypointstoquentinandleyla");
  }
  return (
    <Layout>
      <div className="container">
        <img src="/padlock.svg" width="200px" alt="Padlock"/>
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
    </Layout>
  );
}

export default IndexPage
