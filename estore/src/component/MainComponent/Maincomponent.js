import React from "react";
import Sidebar from "../SideBar/Sidebar";
import Product from "../Product";
import "./_main-component.scss"

function Maincomponent() {
  return (
    <>
      <div className="page-layout">
       
        <Sidebar />
        <Product />
      </div>
    </>
  );
}

export default Maincomponent;
