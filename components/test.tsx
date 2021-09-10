import React from "react";

interface TestProps {
  title: string;
}

const Test = (props: TestProps) => {
  return <div>{props.title}</div>;
};

export default Test;
