import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";


import Signin from "./pages/Login";



const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Signin />} />
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
