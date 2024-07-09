import React from "react";
import Statistics from "./Statistics";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import Events from "./Events";
import PopularDishes from "./PopularDishes";
import ActiveUsers from "./ActiveUsers";
import "../../css/home.css";

export function HomePage() {
  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
