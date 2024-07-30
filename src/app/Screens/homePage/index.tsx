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
import { Product } from "../../lib/data/types/product";

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
    const result = [
      {
        _id: {
          $oid: "66a7fccf96b7507a28b3305c",
        },
        productStatus: "PAUSE",
        productCollection: "DISH",
        productName: "Osh",
        productPrice: 21,
        productLeftCount: 23,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "afsdfsaf",
        productImages: [
          "uploads/products/f286dce8-9351-4cbe-962c-e031e10ef489.jpg",
        ],
        productViews: 0,
        createdAt: {
          $date: "2024-07-29T20:34:23.043Z",
        },
        updatedAt: {
          $date: "2024-07-29T20:34:23.043Z",
        },
        __v: 0,
      },
      {
        _id: {
          $oid: "66a7fd1996b7507a28b33060",
        },
        productStatus: "PAUSE",
        productCollection: "DISH",
        productName: "Shashlik",
        productPrice: 2,
        productLeftCount: 32,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "adsfsd",
        productImages: [
          "uploads/products/a8c6467c-9cfd-4114-a125-d3023a13acbd.jpg",
        ],
        productViews: 0,
        createdAt: {
          $date: "2024-07-29T20:35:37.617Z",
        },
        updatedAt: {
          $date: "2024-07-29T20:35:37.617Z",
        },
        __v: 0,
      },
    ];
    // Backend server data request => [Backend Data Fetch]
    // slice: Data Inserting to Redux Store => [Data Store]

    // @ts-ignore
    setPopularDishes(result)
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
