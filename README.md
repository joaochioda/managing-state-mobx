# managing-state-mobx

Mobx is an alternative to redux. You don't have to wrap your entire application with context api and suffer unnecessary re-renders.
You just need:

1- create a person class and in the constructor specify which are the attributes that will be observable by the components.

2- pass state class to component:
 ` <Name person={person} /> `
 
3- get person state via props using observer (HOC) in the component:
```` 
const Name = observer(({person}) => {...

return (<div> {person.name} </div>) 

}
````
