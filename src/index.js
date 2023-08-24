import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NavbarDefault } from './Components/Header/Navbar'; // Adjust the path based on your file structure
import { ThemeProvider } from "@material-tailwind/react";
import { QuickOrderTable } from "./Components/QuickOrderTable/QuickOrderTable";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(
  <React.StrictMode>
    <ThemeProvider>
       <App />

    </ThemeProvider>
  </React.StrictMode>
);