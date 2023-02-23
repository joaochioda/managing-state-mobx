import { observer } from "mobx-react-lite" // Or "mobx-react".
import { useRef } from "react"

const App = observer(({person}) => {
  const nameRef = useRef(null)
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={() => person.setName(nameRef.current.value)}>Change name</button>
    </div>
  )
})

export default App
