import React from "react";
import Navbar from "../Pages/Navbar";
import { Outlet } from "react-router";
import Footer from "../Pages/Footer";

const RootLayouts = () => {
  return (
    <div>
      <Navbar />
      <div className="md:min-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayouts;
