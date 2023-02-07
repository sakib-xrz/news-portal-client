import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LeftSidebar from "../components/left-sidebar/LeftSidebar";
import RightSidebar from "../components/right-sidebar/RightSidebar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-2 hidden lg:block">
          <LeftSidebar></LeftSidebar>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7">
          <Outlet></Outlet>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <RightSidebar></RightSidebar>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
