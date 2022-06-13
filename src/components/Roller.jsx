import './css/roller.css'
import { useStoreState } from 'easy-peasy'
import React, { useState } from 'react'

const Roller = () => {
  const [answer, setAnswer] = useState('')
  const { elements } = useStoreState(state => state)

  const picker = () => {
    const factor = elements.length
    const idx = Math.floor(Math.random() * factor)
    const  [ item ] = elements.filter(el => el.id === elements[idx].id)
    setAnswer(item.label)
  }

  return (
    (
      elements.length > 1
      ?
      <div id="sorte">
        <div>{answer}</div>
        <button onClick={() => picker()}>TRIGGERED</button>
      </div>
      :
      <div id="sorte">pas triguéraide</div>
    )
  )
}

export default Roller