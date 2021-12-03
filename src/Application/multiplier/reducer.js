import { MULTIPLIER } from "./action";

const initial = {
    mul: 2
}
export default (state = initial, action) => {
    switch (action.type) {
        case MULTIPLIER:
            return {...state, mul: state.mul * 2 }
        default:
            return state

    }
}