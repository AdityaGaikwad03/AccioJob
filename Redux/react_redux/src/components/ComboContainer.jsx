import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { combo } from '../redux/combo/comboActions'

function ComboContainer() {
    const dispatch = useDispatch()
    const [comboNumber, setComboNumber] = useState(1)
    return (
        <div>
            <h1>Buy Combo of Cakes and Icecreams</h1>
            <input type="text" value={comboNumber} onChange={(e) => setComboNumber(e.target.value)} />
            <button onClick={() => dispatch(combo(Number(comboNumber)))}>Buy Combo</button>
        </div>
    )
}

export default ComboContainer;