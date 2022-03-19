import React from "react";
import ReactDOM from "react-dom";
import config from "./config";
import configureStore from "./home/store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./home/containers/App";

config.register().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={configureStore()}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App/>}/>
            </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
})