export const INCREMENT="INCREMENT";
export const DECREMENT="DECREMENT";

const incrementation=()=>{
    return{
        type:INCREMENT
    }
}
const decrementation=()=>{
    return{
    type:DECREMENT
    }
}

export{incrementation,decrementation}