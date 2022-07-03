import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./Contexts/ContextProvider";
import "./styles/main.scss";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <div className=" bg-slate-100">
        <App />
      </div>
    </ContextProvider>
  </React.StrictMode>
);
