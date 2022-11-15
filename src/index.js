import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/global.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlaceToStay from "./pages/PlaceToStay";
import ModalContex from "./contexts/ModalContex";
import Modal from "./components/Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalContex>
      <Modal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/place-to-stay" element={<PlaceToStay />} />
        </Routes>
      </BrowserRouter>
    </ModalContex>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
