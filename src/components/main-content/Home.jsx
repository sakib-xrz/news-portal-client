import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card/Card';

const Home = () => {
  const news = useLoaderData()
    return (
      <div className="pt-8">
        <h2 className="text-center font-medium text-xl md:text-3xl pb-8">
          Today's All News
        </h2>
        {news.map((n) => (
          <Card key={n._id} n={n}></Card>
        ))}
      </div>
    );
};

export default Home;