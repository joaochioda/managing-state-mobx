import { observer } from "mobx-react-lite" // Or "mobx-react".

const Name = observer(({person}) => {
  return (
    <div>
      <h1>Name: {person.name}</h1>
    </div>
  )
})

export default Name
