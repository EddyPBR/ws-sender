import { LoadAnimation } from "./styles";
import { BiLoaderAlt } from "react-icons/bi";

interface LoadProps {
  size?: number;
}

export function Load({ size }: LoadProps) {
  return (
    <LoadAnimation size={size}>
      <BiLoaderAlt />
    </LoadAnimation>
  )
}