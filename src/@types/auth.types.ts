import { AuthConstants } from "../redux/contants/auth.constants";
import { ICart } from "./cart.types";

export interface IAuth {
  loading: boolean;
  error: string;
  isAuthenticated: boolean;
  user: IUser;
}

export interface ILogin {
  email: string;
  password: string;
  remember_me?: boolean;
}

export interface ISignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface IForgetPassword {
  email: string;
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  token: string;
  dateOfBirth?: string;
  profileImage?: string;
  cart?: ICart;
}

export interface CREATE_USER_START {
  type: AuthConstants.CREATE_USER_START;
}

export interface CREATE_USER_SUCCESS {
  type: AuthConstants.CREATE_USER_SUCCESS;
  payload: IUser;
}

export interface CREATE_USER_FAIL {
  type: AuthConstants.CREATE_USER_FAIL;
  payload: string;
}

export interface LOGIN_START {
  type: AuthConstants.LOGIN_START;
}

export interface LOGIN_SUCCESS {
  type: AuthConstants.LOGIN_SUCCESS;
  payload: IUser;
}

export interface LOGIN_FAIL {
  type: AuthConstants.LOGIN_FAIL;
  payload: string;
}

export interface LOG_OUT {
  type: AuthConstants.LOG_OUT;
}

export interface FORGET_PASSWORD_START {
  type: AuthConstants.FORGET_PASSWORD_START;
}

export interface FORGET_PASSWORD_SUCCESS {
  type: AuthConstants.FORGET_PASSWORD_SUCCESS;
}

export interface FORGET_PASSWORD_FAIL {
  type: AuthConstants.FORGET_PASSWORD_FAIL;
  payload: string;
}

export type ActionsType =
  | CREATE_USER_START
  | CREATE_USER_SUCCESS
  | CREATE_USER_FAIL
  | LOGIN_START
  | LOGIN_SUCCESS
  | LOGIN_FAIL
  | FORGET_PASSWORD_START
  | FORGET_PASSWORD_SUCCESS
  | FORGET_PASSWORD_FAIL
  | LOG_OUT;
