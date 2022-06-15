import './css/form.css'
import { useStoreActions } from 'easy-peasy'
import React, { useState } from 'react'

const Form = () => {
  const [item, setItem] = useState('')
  const { add } = useStoreActions(actions => actions)

  const noBlanks = (val) => {
    if (val === null) {
      return false
    } else {
      return val.trim()
    }
  }
  const superAdd = (val) => {
    add(val)
    setItem('')
  }

  return (
    <section id="input-section">
      <form autoComplete="off" onSubmit={(e) => {
        e.preventDefault()
        noBlanks(item) ? superAdd(item) : window.alert('plz write something before submitting new item')
      }}>
        <input
          autoComplete="off"
          type="text"
          name="option"
          maxLength="25"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <label htmlFor="option">Enter new option</label>
        <div className="border-bottom"></div>
        <button type="submit">+</button>
      </form>
    </section>
  )
}

export default Form