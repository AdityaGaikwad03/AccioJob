import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux/icecream/icecreamActions'
function IcecreamContainer() {
     
//this is a function that takes state as a callbake and retuens the desired state from the store
  const numOfIceCreams = useSelector(state => state.icecream.numOfIceCreams)
//this hook returns the reference of dispatch function from the redux store
  const dispatch = useDispatch()

  const [icecreamNumber, setIcecreamNumber] = useState(1)
  return (
    <div>
        <h1>icecreams: {numOfIceCreams}</h1>
        <input type = "text" value = {icecreamNumber} onChange = {(e) => setIcecreamNumber(e.target.value)}/>
        <button onClick = {() => dispatch(buyIceCream(Number(icecreamNumber)))}>buy icecream</button>
    </div>
  )
}

export default IcecreamContainer;