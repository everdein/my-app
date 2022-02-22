import React from "react";
import ReactDOM from "react-dom";
import config from "./config";
import configureStore from "./home/store/configureStore";
import { Provider } from "react-redux";
import RouteToURL from "./RouteToURL";

config.register().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={configureStore()}>
        <RouteToURL/>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
})