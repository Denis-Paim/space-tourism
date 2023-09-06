import data from "./data.json";
import { useState } from "react";
import "./crewStyles.css";
import img2 from "../assets/crew/image-douglas-hurley.png";

const Crew = () => {
  const [role, setRole] = useState(data.crew[0].role);
  const [name, setName] = useState(data.crew[0].name);
  const [img, setImg] = useState(data.crew[0].images.png);
  const [bio, setBio] = useState(data.crew[0].bio);

  const handleClick = (e) => {
    console.log(e.target.value);
    setRole(data.crew[e.target.value].role);
    setName(data.crew[e.target.value].name);
    setBio(data.crew[e.target.value].bio);
  };

  return (
    <div className="crew-page">
      <div className="crew-content">
        <div className="crew-text">
          <div>
            <h2 className="meet-crew"><span>02</span>MEET YOUR CREW</h2>
          </div>
          <h2 className="role">{role}</h2>
          <h1>{name}</h1>
          <p>{bio}</p>
          <nav>
            <ul className="nav-crew">
              <li value={0} onClick={handleClick}>
                <span></span>
              </li>
              <li value={1} onClick={handleClick}>
                <span></span>
              </li>
              <li value={2} onClick={handleClick}>
                <span></span>
              </li>
              <li value={3} onClick={handleClick}>
                <span></span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="crew-img">
        <img src={img2} alt="img" />
      </div>
    </div>
  );
};

export default Crew;
