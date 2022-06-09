import './css/form.css'
import { useStoreActions } from 'easy-peasy'
import React, { useState } from 'react'

const Form = () => {
  const [newValue, setNewValue] = useState(null)
  const { add } = useStoreActions(actions => actions)

  const inputValue = (e) => {
    setNewValue(e.target.value)
  }
  
  return (
    <section id="option-feed">
      <form onSubmit={(e) => {
        e.preventDefault()
        add(newValue)}}>
        <label htmlFor="option">
          Enter new option
        </label>
        <input type="text" name="option" onChange={inputValue} />
        <button type="submit">Add</button>
      </form>
    </section>
  )
}

export default Form