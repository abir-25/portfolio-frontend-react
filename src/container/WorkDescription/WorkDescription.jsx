import React, { useState, useEffect } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { useParams } from "react-router-dom";
import "./WorkDescription.scss";

const WorkDescription = () => {
  const [work, setWork] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const query = `*[ _type == "works" && _id == "${id}" ]`;

    client.fetch(query).then((data) => {
      setWork(data);
    });
  }, []);

  console.log(work);
  return <div>{id}</div>;
};

export default WorkDescription;
