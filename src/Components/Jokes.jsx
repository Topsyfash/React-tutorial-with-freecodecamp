/* eslint-disable react/prop-types */

import { useState } from "react"

const Jokes = (props) => {

  const [isShown, setIsShown] = useState(false)

  function handleClick() {
    setIsShown((prevState) => {
      return  !prevState
    })
  }

  


  return (
    <div>
      {props.setup && <h3>Question: {props.setup}</h3>}
      {isShown && <p><b>Punchline:</b> {props.Punchline}</p>}
      {/* <button onClick={handleClick}>Show Punchline</button> */}
      <button onClick={handleClick}>{isShown? "hide punchline" : "show punchline" }</button>
      <hr />
    </div>
  )
}

export default Jokes