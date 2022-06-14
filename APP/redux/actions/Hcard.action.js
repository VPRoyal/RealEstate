import { ADD_HCARD, UPDATE_HCARD, REMOVE_HCARD, CHANGE_MAX_VAL } from "../constants"
const addHcard=(data)=>{
        return{
            type:ADD_HCARD,
            data:data
        }
}
const changeMaxVal=(data)=>{
    return{
        type:CHANGE_MAX_VAL,
        data:data
    }
}
const updateHcard=(data)=>{
    return{
        type:UPDATE_HCARD,
        data:data
    }
}
const removeHcard=(data)=>{
    return{
        type:REMOVE_HCARD,
        data:data
    }
}
export {
addHcard,
updateHcard,
removeHcard,
changeMaxVal
}