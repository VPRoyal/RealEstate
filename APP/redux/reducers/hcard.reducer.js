import { ADD_HCARD, CHANGE_MAX_VAL } from "../constants";
const initialState = {
    Hcards: [],
    isMax: false
}

const hcardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HCARD:
            return {
                ...state,
                Hcards: [...state.Hcards, ...action.data]
            };
        case CHANGE_MAX_VAL:
            return {
                ...state,
                isMax: action.data
            };
        default: return state;
    }
}
export default hcardReducer