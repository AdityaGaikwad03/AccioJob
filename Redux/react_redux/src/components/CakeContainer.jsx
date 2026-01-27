import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
function CakeContainer() {
     
//this is a function that takes state as a callbake and retuens the desired state from the store
  const numOfCakes = useSelector(state => state.cake.numOfCakes)

//this hook returns the reference of dispatch function from the redux store
  const dispatch = useDispatch()

  const [cakeNumber, setCakeNumber] = useState(1)
  return (
    <div>
        <h1>cakes: {numOfCakes}</h1>
        <input type = "text" value = {cakeNumber} onChange = {(e) => setCakeNumber(e.target.value)}/>
        <button onClick = {() => dispatch(buyCake(Number(cakeNumber)))}>buy cake</button>
    </div>
  )
}

export default CakeContainer
