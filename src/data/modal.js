import { action } from 'easy-peasy'
import { v4 as uuidv4 } from 'uuid'

const modal = {
  // STATES
  elements: [],
  layout: {
    formIsVisible: true,
    wheelIsVisible: true
  },
  // ACTIONS
  add: action((state, payload) => {
    if (state.elements.length > 7) {
      state.layout.formIsVisible = false
      return
    }
    const newElement = {
      label: payload,
      id: uuidv4(),
      nb: state.elements.length + 1
    }
    state.elements = [...state.elements, newElement]
  }),
  remove: action((state, payload) => {
    state.layout.formIsVisible = true
    state.elements = state.elements.filter(el => el.id !== payload)
  })
}

export default modal