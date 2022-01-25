import { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { ActionsType } from "../../@types/orders.types";
import API from "../../api";
import { notify } from "../../utils/helpers";
import { OrdersConstants } from "../contants/orders.constants";

export const getMyOrders = () => async (dispatch: Dispatch<ActionsType>) => {
  try {
    dispatch({
      type: OrdersConstants.GET_MY_ORDERS_START,
    });
    const { data }: AxiosResponse = await API.get("/orders/myorders");
    dispatch({
      type: OrdersConstants.GET_MY_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    notify("error", error?.response?.data?.message || error.message);
    dispatch({
      type: OrdersConstants.GET_MY_ORDERS_FAIL,
      payload: error?.response?.data?.message || error.message,
    });
  }
};

export const getAllOrders = () => async (dispatch: Dispatch<ActionsType>) => {
  try {
    dispatch({
      type: OrdersConstants.GET_ORDERS_START,
    });
    const { data }: AxiosResponse = await API.get("/orders");
    dispatch({
      type: OrdersConstants.GET_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    notify("error", error?.response?.data?.message || error.message);
    dispatch({
      type: OrdersConstants.GET_ORDERS_FAIL,
      payload: error?.response?.data?.message || error.message,
    });
  }
};
