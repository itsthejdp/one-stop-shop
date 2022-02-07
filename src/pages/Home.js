import React from "react";
import List from "../components/items/List";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "Shoes",
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-4187.jpg",
    price: 200,
    description: "One of the most classic sneaker models in history",
  },
  {
    id: "p2",
    title: "Shirt",
    image:
      "https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 450,
    description: "One of the most classic shirts in history",
  },
  {
    id: "p3",
    title: "Dress Shirt",
    image:
      "https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 1000,
    description: "The Kamakura. One of the most classic shirts in history",
  },
];

const HomePage = () => {
  return (
    <section>
      <h1>Alloololol Products</h1>
      <List items={DUMMY_DATA} />
    </section>
  );
};

export default HomePage;
