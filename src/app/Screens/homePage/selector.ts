import { createSelector } from "reselect";
import { AppRootState } from "../../lib/types/screen";
import { HomePage } from ".";
import { Home } from "@mui/icons-material";
const selectHomePage = (state: AppRootState) => state.homePage

export const retrievePopularDishes = createSelector(
    selectHomePage, 
    (HomePage)=> HomePage.popularDishes)
const retrieveNewDishes = createSelector(
    selectHomePage, 
    (HomePage)=> HomePage.newDishes)
const retrieveTopUsers = createSelector(
    selectHomePage, 
    (HomePage)=> HomePage.topUsers)