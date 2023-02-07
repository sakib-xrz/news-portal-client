import React from "react";
import FindUs from "./FindUs/FindUs";
import LoginSocial from "./LoginSocial/LoginSocial";
import Slider from "./Slider/Slider";

const RightSidebar = () => {
  return (
    <div className="md:h-screen md:sticky md:top-12 md:z-[2] md:overflow-y-auto md:scroll-smooth md:scrollbar-hide py-8 px-3 lg:px-4">
      <LoginSocial></LoginSocial>
      <FindUs></FindUs>
      <Slider></Slider>
    </div>
  );
};

export default RightSidebar;
