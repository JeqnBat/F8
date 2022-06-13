import { useStoreState, useStoreActions } from 'easy-peasy'
import './css/items.css'

const Items = () => {
  const { elements } = useStoreState(state => state)
  const { remove } = useStoreActions(actions => actions)

  return (
    <section id="items">
      {elements.map((el) => (
        <div key={el.id}>
          <span className="symbol">{el.nb}</span>
          <div onChange={(e) => e.target.value}>{el.label}</div>
          <span className="cross" onClick={() => remove(el.id)}>✖</span>  
        </div>
      ))}
    </section>
  )
}

export default Items