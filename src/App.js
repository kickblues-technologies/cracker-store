import React from "react";
import { NavbarDefault } from './Components/Header/Navbar'; // Adjust the path based on your file structure
import { QuickOrderTable } from "./Components/QuickOrderTable/QuickOrderTable";
import { FooterWithSocialLinks } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavbarDefault />
      <QuickOrderTable />
      <FooterWithSocialLinks />
    </>
  );
}

export default App;
