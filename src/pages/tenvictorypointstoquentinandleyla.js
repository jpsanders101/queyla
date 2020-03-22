import React from "react"

import "./victory.css"

const VictoryPage = () => (
  <div className="victory-container">
    <div className="scroll-section sheep">
      <h1 className="centre congrats ohmygod">{'Congratulations!'}</h1>
      <img className="skate-sheep" src="/skate-sheep.gif" alt="A sheep on a skateboard" />
    </div>
    <div className="scroll-section wheat">
      <div className="content-block">
        <p>{'Dearest Quentin and Leyla,'}</p>
        <p>{'You have completed our fiendish challenge!'}</p>
        <p>{'You’re a pair of legends!'}</p>
        <p>{'We’re really quite sorry if the many anonymous letters alarmed you to the extent that you contacted the authorities!'}</p>
      </div>
    </div>
    <div className="scroll-section brick">
    <div className="content-block">
      <h2 className="centre challenges">{'But the challenges are not quite over yet…'}</h2>
      <p>{'In honour of both of your upcoming birthdays, we will be taking you to...'}</p>
      </div>
    </div>
    <div className="scroll-section ore">
    <div className="content-block">
      <a href="https://www.modern-fables.com/"><img src="/modern-fables-logo.png" alt="Logo for Modern Fables"  /></a>
      <p>{'For an afternoon of puzzlement, team work, and inevitable bickering at one another’s poor communication skills.'}</p>
      <p>{'Then, provided we do indeed escape the bloody room, we will then take you for a meal in the nearby, delicious establishment...'}</p>
    </div>
    </div>
    <div className="scroll-section wood">
      <div className="content-block">
        <h2 className="centre">{'Little Georgia'}</h2>
        <p>{'...a place which, if you haven’t been to before, '}<span className="ohmygod">{'oh my god'}</span>{', serves the most amazing freshly baked warm bread things with a cheesy eggy mixture in the middle which is one of'}</p>
        <h3 className="centre">{'THE MOST'}</h3>
        <p>{'comforting and delicious things one can order on this sweet earth.'}</p>
      </div>
    </div>
    <div className="scroll-section stobo">
      <div className="content-block">
        <p className="date">{'All we gotta do is pick a date!'}</p>
        <p className="centre">
          {'With lots of love from,'}
          <br />
          {'Jack & Jon'}
          <br />
          {'xxx'}
        </p>
      </div>
    </div>
  </div>
)

export default VictoryPage
