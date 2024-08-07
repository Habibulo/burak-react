import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import reduxLogger from "redux-logger"
import HomePageReducer from './Screens/homePage/slice';
import ProductsPageReducer from './Screens/productsPage/slice';
import OrdersPageReducer from './Screens/ordersPage/slice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => 
    //@ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    productsPage: ProductsPageReducer,
    ordersPage: OrdersPageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
