import "./destinationStyles.css";
import data from "./data.json";
import { useState } from "react";
import img2 from "../assets/destination/image-moon.png";

const Destination = () => {
  const [name, setName] = useState(data.destinations[0].name);
  const [description, setDescription] = useState(
    data.destinations[0].description
  );
  const [img, setImg] = useState(img2);
  const [distance, setDistance] = useState(data.destinations[0].distance);
  const [travelTime, setTravelTime] = useState(data.destinations[0].travel);

  const handleClick = (e) => {
    setName(data.destinations[e.target.value].name);
    setDescription(data.destinations[e.target.value].description);
    setDistance(data.destinations[e.target.value].distance);
    setTravelTime(data.destinations[e.target.value].travel);
    setImg(data.destinations[e.target.value].images['webp']);
  };

  return (
    <div className="destination-page">
      <div>
        <h2>
          <span>01</span>PICK YOUR DESTINATION
        </h2>
      </div>
      <div className="destination-content">
        <div>
          <img src={img} alt="img" />
        </div>
        <div className="content">
          <nav>
            <ul className="nav-destination">
              <li value={0} onClick={handleClick}>
                {data.destinations[0].name}
              </li>
              <li value={1} onClick={handleClick}>
                {data.destinations[1].name}
              </li>
              <li value={2} onClick={handleClick}>
                {data.destinations[2].name}
              </li>
              <li value={3} onClick={handleClick}>
                {data.destinations[3].name}
              </li>
            </ul>
          </nav>
          <h1>{name}</h1>
          <p>{description}</p>
          <span className="span-line"></span>
          <div className="distance">
            <div>
              <p>AVG. DISTANCE</p>
              <h2>{distance}</h2>
            </div>
            <div>
              <p>EST. TRAVEL TIME</p>
              <h2>{travelTime}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
