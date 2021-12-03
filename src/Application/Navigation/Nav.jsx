import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "../counter/Component";
import MultiplierApp from "../multiplier/Component";


const Nav=()=>{
    return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Counter/>}></Route>
        <Route path="/Multiplier" element={<MultiplierApp />}></Route>
    </Routes>
    </BrowserRouter>
    </>
    )
}

export default Nav