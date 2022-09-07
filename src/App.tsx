import React from "react";
import "./App.scss";
import RoutesMain from "./routes/main.routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => (
  <div className="App">
    <RoutesMain />

    <ToastContainer />
  </div>
);

export default App;
