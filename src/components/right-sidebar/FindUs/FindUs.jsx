import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Link } from "react-router-dom";

const FindUs = () => {
  return (
    <div>
      <h3 className="pb-2 font-medium text-md">Find Us On</h3>
      <div className="flex items-center bg-secondary text-md px-4 py-2 rounded-md shadow-sm cursor-pointer mb-2 hover:text-primary">
        <AiFillFacebook></AiFillFacebook>
        <span className="ml-2">Facebook</span>
      </div>
      <div className="flex items-center bg-secondary text-md px-4 py-2 rounded-md shadow-sm cursor-pointer mb-2 hover:text-red-600">
        <AiFillYoutube></AiFillYoutube> <span className="ml-2">YouTube</span>
      </div>
      <div className="flex items-center bg-secondary text-md px-4 py-2 rounded-md shadow-sm cursor-pointer mb-2 hover:text-[#1C9AEF]">
        <AiFillTwitterSquare></AiFillTwitterSquare>{" "}
        <span className="ml-2">Twitter</span>
      </div>
      <div className="flex items-center bg-secondary text-md px-4 py-2 rounded-md shadow-sm cursor-pointer mb-2 hover:text-[#0DC143]">
        <AiOutlineWhatsApp></AiOutlineWhatsApp>{" "}
        <span className="ml-2">WhatsApp</span>
      </div>
      <div className="flex items-center bg-secondary text-md px-4 py-2 rounded-md shadow-sm cursor-pointer mb-2 hover:text-[#5562EA]">
        <FaDiscord></FaDiscord> <span className="ml-2">Discord</span>
      </div>
      <div className="flex items-center bg-secondary text-md px-4 py-2 rounded-md shadow-sm cursor-pointer mb-2 hover:text-[#E8B033]">
        <MdPolicy></MdPolicy>{" "}
        <span className="ml-2">
          <Link to={"/policy"}>Privacy Policy</Link>
        </span>
      </div>
      <div className="flex items-center bg-secondary text-md px-4 py-2 rounded-md shadow-sm cursor-pointer mb-2 hover:text-[#5DCAD9]">
        <MdOutlineLibraryBooks></MdOutlineLibraryBooks>{" "}
        <span className="ml-2">
          <Link to={"/terms"}>Terms & Conditions</Link>
        </span>
      </div>
    </div>
  );
};

export default FindUs;
