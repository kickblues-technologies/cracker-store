import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Button from "./Button";
import { NavbarDefault } from './Navbar'; // Adjust the path based on your file structure
import { ThemeProvider } from "@material-tailwind/react";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <App />
      <Button /> */}
      <NavbarDefault />

    </ThemeProvider>
  </React.StrictMode>
);