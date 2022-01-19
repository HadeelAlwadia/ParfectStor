import { Typography } from "@mui/material";
import { CardContainer } from "../Card/Card.style";
import { Card } from "../Card/Types";

interface IProps extends Card {}

export default function CategroyCard({ img, name }: IProps) {
  return (
    <CardContainer
      width="380px"
      height="410px"
      sx={{
        borderRadius: 0,
        background: "white",
        paddingTop: "23px",
        boxSizing: "border-box",
        boxShadow: "none",
      }}
    >
      <CardContainer
        height="346px"
        width="380px"
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "16px",
          boxShadow: "1px 2px px 1px rgba(0,0,0,0.2)",
        }}
      >
        <img src={img} alt="img" />
      </CardContainer>
      <Typography
        variant="h2"
        fontSize="1.5rem"
        sx={{
          marginTop: "16px",
          textAlign: "center",
          letterSpacing: "0.6px",
        }}
      >
        {name}
      </Typography>
    </CardContainer>
  );
}