import { combineReducers } from 'redux'
import hcardReducer from './hcard.reducer'
export default combineReducers({  
    HouseData:hcardReducer
})
