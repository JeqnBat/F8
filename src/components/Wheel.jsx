import './css/wheel.css'
import { useStoreState } from 'easy-peasy'

const Wheel = () => {
  const { elements } = useStoreState(state => state)
  const elementsNb = elements.length
  return (
    <>
      <div id="wrapper">
        <div id="wheel">
          {elements.map((el) => (
            <div 
              className={"element element-" + elementsNb} 
              key={el.id}
            >
              {el.label}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Wheel