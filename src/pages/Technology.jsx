import data from "./data.json";
import { useState } from "react";
import "./technologyStyles.css";
import img2 from "../assets/technology/image-launch-vehicle-portrait.jpg";

const Technology = () => {
  const [title, setTitle] = useState(data.technology[0].name);
  const [content, setContent] = useState(data.technology[0].description);
  const [img, setImg] = useState(data.technology[0].images.png);

  const handleClick = (e) => {
    console.log(e.target.value);
    setTitle(data.technology[e.target.value].name);
    setContent(data.technology[e.target.value].description);
    setImg(data.technology[e.target.value].bio);
  };

  return (
    <div className="technology-page">
      <div className="technology-title">
        <h2><span>03</span>SPACE LUNCH 101</h2>
      </div>
      <div className="technology-content">
        <nav>
          <ul className="nav-technology">
            <li value={0} onClick={handleClick}>
              1
            </li>
            <li value={1} onClick={handleClick}>
              2
            </li>
            <li value={2} onClick={handleClick}>
              3
            </li>
          </ul>
        </nav>
        <div class="content">
          <h2>THE TERMINOLOGY...</h2>
          <h1>{title}</h1>

          <p>{content}</p>
        </div>

        <div>
          <img src={img2} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
