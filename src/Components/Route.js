import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import React from 'react';
import Home from "../Components/Home";
import Main from "./Main";

const AppRouter=() => {
        return(
            <Router>
                <Routes>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/" element={<Main/>}></Route>
                </Routes>
            </Router>

        )
}
export default AppRouter;