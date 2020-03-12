import React, { useState } from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  const [riddleAnswer, setRiddleAnswer] = useState('');

  if (riddleAnswer.toLowerCase() === 'sheep') {
    navigate("/tenvictorypointstoquentinandleyla");
  }
  return (
    <Layout>
      <input
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
    </Layout>
  );
}

export default IndexPage
