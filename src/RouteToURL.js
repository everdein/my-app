import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "./home/containers/App";

function RouteToURL() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RouteToURL;