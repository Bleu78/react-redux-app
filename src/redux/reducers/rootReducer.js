import {
    INCREASE_COUNTER,
    DECREASE_COUNTER
} from "../constants/constants";

const intialState = {
    counter: 0,
    name: 'King'
};

function rootReducer(state = intialState, action) {

    switch(action.type){
        case INCREASE_COUNTER:
            return {
                ...state,
                counter : state.counter + 1
            }
        case DECREASE_COUNTER:
            return {
                ...state,
                counter : state.counter - 1
            }
            default:
                return state;
    }
}

export default rootReducer;