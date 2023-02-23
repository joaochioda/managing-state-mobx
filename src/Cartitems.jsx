import { observer } from "mobx-react-lite" // Or "mobx-react".
import { useRef } from "react"

const Cartitems = observer(({cart}) => {
  const itemNameRef = useRef(null)
  return (
    <div>
      <p>Add new item</p>
      <input ref={itemNameRef} />
      <button onClick={() => cart.addItem(itemNameRef.current.value)}>Add item</button>
    </div>
  )
})

export default Cartitems
