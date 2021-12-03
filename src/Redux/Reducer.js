import { combineReducers } from "redux";
// import Counter from "../Application/counter/Component"
import MultiplierReducer from "../Application/multiplier/reducer"
import CounterReducer from "../Application/counter/reducer";

export default combineReducers({ CounterReducer, MultiplierReducer })