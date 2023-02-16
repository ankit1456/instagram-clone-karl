import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FirebaseContext from "./context/firebase";
import {Firebase,FieldValue} from "./lib/firebase";
import './styles/app.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{Firebase,FieldValue}}>
    <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
