import React, {useState} from "react";
import Question from "../components/Question";
import Buttons from "../components/Buttons"

function Sixth() {
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 })

  function newPosition() {
    const newTop = Math.floor(Math.random() * (window.innerHeight / 5));
    const newLeft = Math.floor(Math.random() * (window.innerWidth / 5));
    setButtonPosition({ top: newTop, left: newLeft })
  }

  function handleClick() {
    window.location.href = "/seventh";
  }

  return ( 
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center w-full gap-8">
        <Question question="...Cu hoje??"/>
        <div className="flex gap-8">
          <Buttons to="/second" title="sim" function={handleClick}/>
          <Buttons title="não" function={newPosition} top={buttonPosition.top} left={buttonPosition.left}/>
        </div>
      </div>
    </div>
  )
}

export default Sixth