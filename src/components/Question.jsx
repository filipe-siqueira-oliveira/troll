import React from "react";

function Question(props) {
  return (
    <div className="flex justify-center items-center w-2/4 h-24">
      <p className="font-roboto text-2xl text-center px-3">{props.question}</p>
    </div>
  )
}

export default Question