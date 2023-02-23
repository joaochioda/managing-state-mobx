import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './Header'
import Name from './Name'
import { person } from './state/person'
import { cart } from './state/cart'
import Cartitems from './Cartitems'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <Header cart={cart}/>
      <Name person={person} />
      <App person={person}/>
      <Cartitems cart={cart}/>
  </>
)
