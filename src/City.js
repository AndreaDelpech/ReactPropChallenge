import React from "react";

export default function City(props) {
  return (
    <div>
      It is {props.value}°C in {props.city}{" "}
    </div>
  );
}
