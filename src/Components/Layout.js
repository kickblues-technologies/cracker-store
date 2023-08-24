import React from "react";
import { NavbarDefault } from "./Header/Navbar"; // Corrected path
import { FooterWithSocialLinks } from "./Footer/Footer"; // Corrected path

function Layout({ children }) {
  return (
    <div>
      <NavbarDefault />
      <main className="container mx-auto p-4">{children}</main>
      <FooterWithSocialLinks />
    </div>
  );
}

export default Layout;
