import Rating from "@mui/material/Rating";
import { CounterRating } from "./Rating.styled";

export type Name =
  | "disabled"
  | "read-only"
  | "no-value"
  | "simple-controlled"
  | "half-rating"
  | "half-rating-read";

interface Iprops {
  id?: string;
  value: number | null;
  precision?: number;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  name?: string;
  onChangeValue?: Function;
  paddingRating?: string;
}

function RatingComponent({
  id,
  value,
  precision,
  isReadOnly,
  isDisabled,
  name,
  onChangeValue,
  paddingRating,
}: Iprops) {
  return (
    <CounterRating padding={paddingRating}>
      <Rating
        id={id}
        name={name}
        value={value}
        precision={precision}
        readOnly={isReadOnly}
        disabled={isDisabled}
        sx={{ color: "#FCDD06", fontSize: "2rem" }}
        onChange={(e, value_) => onChangeValue?.(value_)}
      />
    </CounterRating>
  );
}
export default RatingComponent;
