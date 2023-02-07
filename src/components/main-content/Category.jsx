import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div className="pt-8">
      {categoryNews.length === 0 ? (
        <h2 className="text-center font-medium text-xl md:text-3xl pb-8">
          No News Found
        </h2>
      ) : (
        <h2 className="text-center font-medium text-xl md:text-3xl pb-8">
          This category has {categoryNews.length} news
        </h2>
      )}
      {categoryNews.map((n) => (
        <Card key={n._id} n={n}></Card>
      ))}
    </div>
  );
};

export default Category;
