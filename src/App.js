import Wheel from './components/Wheel'
import Form from './components/Form'
import modal from './data/modal'
import { StoreProvider, createStore } from 'easy-peasy'

const store = createStore(modal)

const App = () => {
  return (
    <StoreProvider store={store}>
      <Form />
      <Wheel />
    </StoreProvider>
  )
}

export default App
