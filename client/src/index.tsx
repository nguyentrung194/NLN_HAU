import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { ContextProvider } from "./contexts/context";

ReactDOM.render(
  <ToastProvider autoDismissTimeout={3000} placement="top-right">
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </ToastProvider>,
  document.getElementById("root")
);

reportWebVitals();
