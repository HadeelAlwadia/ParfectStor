import { styled } from "@mui/material/styles";
import { Button as B } from "@mui/material";

interface Iprops {
  borderRadius?: string;
  border?: string;
  height?: string;
  width?: string;
  fontSize?: string;
  background?: string | "secondary";
  unhover?: boolean;
  to?: string;
  color?: string;
}

export const Button = styled(B)<Iprops>((props) => ({
  color: props.theme.palette.text.primary,
  background:
    props.background === "secondary"
      ? props.theme.palette.secondary.main
      : props.background || props.theme.palette.primary.main,
  borderRadius: props.borderRadius || "10px",
  fontSize: props.fontSize || "24px",
  border: props.border || "none",
  textDecoration: "none",
  height: props.height || "62px",
  width: props.width || "100%",
  "&:hover": !props.unhover && {
    background:
      props.background === "secondary"
        ? props.theme.palette.secondary.main
        : props.background || props.theme.palette.primary.main,
    opacity: "0.8",
  },
  "&:disabled": {
    background:
      props.background === "secondary"
        ? props.theme.palette.secondary.main
        : props.background || props.theme.palette.primary.main,
    opacity: "0.8",
    cursor: "pointer",
  },
}));
