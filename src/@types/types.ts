import { ThemeConstants } from "../redux/contants/theme.constants";
export type theme = "light" | "dark";

export interface ToggleThemeAction {
  type: ThemeConstants.TOGGLE_THEME;
  payload: "light" | "dark";
}

export interface IUserLogin {
  email: string;
  password?: string;
  remember_me: boolean;
}
