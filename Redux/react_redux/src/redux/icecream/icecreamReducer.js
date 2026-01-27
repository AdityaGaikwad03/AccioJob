import { BUY_ICECREAM } from "./icecreamType"
import {COMBO} from "../combo/comboType"

const initialState = {
    numOfIceCreams: 20
}
const icecreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state, numOfIceCreams: state.numOfIceCreams - action.payload
            }
        case COMBO:
            return{
                ...state, numOfIceCreams: state.numOfIceCreams - action.payload
            }
        default:
            return state
    }
}

export default icecreamReducer;