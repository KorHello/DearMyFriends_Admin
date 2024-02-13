import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login";
import AddSentence from "./page/AddSentence";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/main" element={<Main />}></Route>
                <Route path="/addSentence" element={<AddSentence />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App