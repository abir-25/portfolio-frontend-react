import React from "react";
import { useParams } from "react-router-dom";

const WorkDescription = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default WorkDescription;
