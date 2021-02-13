import React from "react";
import Loader from "react-loader-spinner";
import { LoaderTypes } from "types";

type Props = {
  children?: any;
  condition: any;
  width?: number;
  height?: number;
  type?: LoaderTypes;
  timeout?: number;
};

function Spinner({
  children,
  condition,
  width = 25,
  height = 25,
  type = "Puff",
  timeout = 5000,
}: Props) {
  if (!condition) {
    return (
      <Loader
        type={type}
        color="#00BFFF"
        height={height}
        width={width}
        timeout={timeout}
      />
    );
  }
  if (condition) {
    return children;
  }
  return null;
}

export default Spinner;
