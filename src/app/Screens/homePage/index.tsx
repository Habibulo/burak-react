import React, { useEffect } from "react";
import Statistics from "./Statistics";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import Events from "./Events";
import PopularDishes from "./PopularDishes";
import ActiveUsers from "./ActiveUsers";
import "../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../lib/types/product"; 
import { log } from "console";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../lib/enums/product.enum";

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data))
})

const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({popularDishes})
)

export function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch())
  const {popularDishes} = useSelector(popularDishesRetriever)
  // selector: Data Fetch from Redux Store => [Extract Data]
  useEffect(() => {
    // Backend server data request => [Backend Data Fetch]
    const product = new ProductService()
    product
    .getProducts(
      {page: 1,
      limit: 4, 
      order: "productViews",
      productCollection: ProductCollection.DISH
    })
    .then(
      data => {
        console.log("test uchun data", data);
        setPopularDishes(data)
      }
    ).catch()
    // slice: Data Inserting to Redux Store => [Data Store]
  }, []);
  console.log(process.env.REACT_APP_URL);
  
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
