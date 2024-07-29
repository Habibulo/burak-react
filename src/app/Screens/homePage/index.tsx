import React, { useEffect } from "react";
import Statistics from "./Statistics";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import Events from "./Events";
import PopularDishes from "./PopularDishes";
import ActiveUsers from "./ActiveUsers";
import "../../css/home.css";

export function HomePage() {
    // selector: Data Fetch from Redux Store => [Extract Data]
  useEffect(() => {
    // Backend server data request => [Backend Data Fetch]
    // slice: Data Inserting to Redux Store => [Data Store]
    
    
  }, []);

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
