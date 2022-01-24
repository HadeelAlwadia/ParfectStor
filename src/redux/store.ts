import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ThemeReducer } from "./reducers/theme.reducers";
import { AuthReducer } from "./reducers/auth.reducers";
import { ProductsReducer } from "./reducers/products.reducers";
import { UsersReducer } from "./reducers/user.reducer";
import { cartReducer } from "./reducers/cart.reducers";
import { OrdersReducer } from "./reducers/orders.reducers";
import { configReducer } from "./reducers/config.reducers";
import { allOrdersReducer } from "./reducers/allorders.reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducers = combineReducers({
  theme: ThemeReducer,
  auth: AuthReducer,
  products: ProductsReducer,
  users: UsersReducer,
  cart: cartReducer,
  orders: OrdersReducer,
  allOrder:allOrdersReducer,
  config: configReducer,
});

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export type AppState = ReturnType<typeof reducers>;
