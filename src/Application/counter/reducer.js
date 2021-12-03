import { INCREMENT, DECREMENT } from "./action";

const initialValue = {
    count: 0,
}
export default (state = initialValue, action) => {
    // console.log("inside reducer", state)
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1 }
        case DECREMENT:
            return {...state, count: state.count - 1 }
        default:
            return state
    }
}