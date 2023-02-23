import { observer } from "mobx-react-lite" // 
const Header = observer(({cart}) => {
  return (
    <header>
          <h1>My Shopping Items</h1>
          <p>Number of items: {cart.items.length}</p>
          {cart.items.map((item) => (<p>{item}</p>))}
    </header>
  )
})

export default Header
