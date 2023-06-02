import React, { useState, useEffect } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { useParams } from "react-router-dom";
import "./WorkDescription.scss";
import { Navbar } from "../../components";

const WorkDescription = () => {
  const [work, setWork] = useState([]);
  const [location, setLocation] = useState();
  const [imageSrc, setImageSrc] = useState();
  const { id } = useParams();

  useEffect(() => {
    const query = `*[ _type == "works" && _id == "${id}" ]`;

    client.fetch(query).then((data) => {
      setWork(data);
      setImageSrc(urlFor(data[0]?.imgUrl && data[0]?.imgUrl).url());
    });
  }, []);
  // console.log(imageSrc);

  useEffect(() => {
    setLocation(JSON.parse(localStorage.getItem("geo-location")));
  }, []);

  // console.log(work);
  return (
    <div>
      <Navbar />
      <div className="app__container app__whitebg">
        <div className="app__work-description-container">
          <h2 className="work-title-text">{work[0]?.longTitle}</h2>
          <div className="tags-container">
            {work[0]?.tags?.map((tag) => tag !== "All" && <span>{tag}</span>)}
          </div>
          <div className="work-summary-container">
            <div className="recent-work-summary-item">
              <p>Completion Time</p>
              <h4>6 Weeks</h4>
            </div>
            <div className="recent-work-summary-item">
              <p>Fee charged</p>
              <h4>
                {location?.country_code === "BD"
                  ? `৳${work[0]?.feeBD}`
                  : `$${work[0]?.feeNonBD}`}
              </h4>
            </div>
          </div>

          <div className="work-image-container">
            <div className="image-container">
              <div className="portfolio_preview_image ">
                <div className="view_full_page">
                  <p>Click To View Full Preview</p>
                </div>
                <img
                  src={imageSrc}
                  alt={work[0]?.title}
                  className="portfolio-item-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDescription;
