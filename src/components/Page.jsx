import Items from './Items'
import Form from './Form'
import Wheel from './Wheel'
import Roller from './Roller'
import { useStoreState } from 'easy-peasy'

const Page = () => {
  const { layout } = useStoreState(state => state)

  return (
    <>
      <Form />
      <Items />
      <Wheel />
      <Roller />
    </>
  )
}

export default Page