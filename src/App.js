import React from "react";
import Layout from "./Components/Layout";
import { QuickOrderTable } from "./Components/QuickOrderTable/QuickOrderTable";
import ContactUs from "./Components/ContactUs/ContactUs";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
        <Layout>
     {/* <QuickOrderTable />  */}
    {/* <ContactUs /> */}
    <Homepage />
     </Layout>
     
  );
}

export default App;
