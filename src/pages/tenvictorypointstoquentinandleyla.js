import React from "react"
import Image from "../components/image"

import "./victory.css"

const VictoryPage = () => (
  <div className="victory-container">
    <div className="scroll-section sheep">
      <h1 className="centre congrats">Congratulations!</h1>
    </div>
    <div className="scroll-section wheat">
      <p>Dearest Quentin and Leyla,</p>
      <p>You have completed our fiendish challenge! You're a pair of legends! We’re really quite sorry if the many letters alarmed you to the extent that you contacted the authorities!</p>
    </div>
    <div className="scroll-section brick">
      <h2 className="centre">But the challenges are not quite over yet…</h2>
      <p>In honour of both of your upcoming birthdays, we will be taking you to...</p>
    </div>
    <div className="scroll-section ore">
      <h2 className="centre">Modern Fables Escape Rooms</h2>
      <p>For an afternoon of puzzlement, team work, and inevitable bickering at one another's poor communication skills.</p>
      <p>Then, provided we do indeed escape the bloody room, we will then take you for a meal in the nearby, delicious establishment...</p>
    </div>
    <div className="scroll-section wood">
      <h2 className="centre">Little Georgia</h2>
      <p>...a place which, if you haven't been to before, oh my god, serves the most amazing warmbread things with a cheesy eggy mixture in the middle which is one of</p>
      <h2 className="centre">THE MOST</h2>
      <p>comforting and delicious things in this sweet earth.</p>
    </div>
    <div className="scroll-section">
      <p>All you gotta do is pick a date!</p>
      <p>With lots of love from,</p>
      <p className="centre">{'Jack & Jon'}</p>
      <p className="centre">{'xxx'}</p>
    </div>
    <Image imageUrl='sheep.jpg' />
  </div>
)

export default VictoryPage
