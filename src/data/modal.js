import { action, thunk } from 'easy-peasy'
import { v4 as uuidv4 } from 'uuid'

const modal = {
  elements: [
  ],
  // THUNKS
  // ACTIONS
  add: action((state, payload) => {
    const newElement = {
      label: payload,
      id: uuidv4()
    }
    state.elements = [...state.elements, newElement]
  })
}

export default modal