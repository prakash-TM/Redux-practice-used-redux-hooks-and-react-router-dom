import { useSelector,useDispatch } from "react-redux";
import multiplication from "./action";
import { incrementation } from "../counter/action";
import {Link} from "react-router-dom"

const MultiplierApp=()=>{

    const dispatch=useDispatch();

    const {mul}=useSelector((state)=>{
        const{MultiplierReducer}=state;
        return MultiplierReducer
    })
    const {count}=useSelector((state)=>{
        const{CounterReducer}=state;
        return CounterReducer
    })

    return(
        <>
        <h3>multiplication value {mul}</h3>
        <h3>counter value is {count}</h3>
        <button onClick={()=>{dispatch(multiplication())}}>click to multiply {mul}</button>
        <button onClick={()=>{dispatch(incrementation())}}>increment count</button>

        <div>
            <Link to="/">go to counter</Link>
        </div>
        </>
    )
}

export default MultiplierApp