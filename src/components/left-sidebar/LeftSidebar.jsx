import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://news-portal-server-psi.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="py-4 pl-3 lg:py-8 lg:pl-8 md:sticky md:top-12">
      <h2 className="text-xl font-medium pb-4">All Category</h2>
      {categories.map((category) => (
        <p
          className="py-1.5 font-normal hover:text-primary hover:underline hover:font-medium"
          key={category.id}
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-primary underline font-medium" : undefined
            }
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        </p>
      ))}
    </div>
  );
};

export default LeftSidebar;
