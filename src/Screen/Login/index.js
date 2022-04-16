import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

function Login() {
  const imgRandomAPi = "https://dog.ceo/api/breeds/image/random";
  const subBreeds = "https://dog.ceo/api/breed/hound/list";
  const [img, setImg] = useState("");
  const [listSubBreeds, setListSubBreeds] = useState([]);
  const [list, setList] = useState("");

  const getRandomPic = () => {
    axios
      .get(imgRandomAPi)
      .then((res) => {
        console.log(res.data);
        setImg(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listSub = () => {
    axios
      .get(subBreeds)
      .then((res) => {
        console.log(res.data.message);
        setListSubBreeds(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clear = () => {
    setListSubBreeds([]);
  };

  useEffect(() => {
    getRandomPic();
  }, []);

  return (
    <div>
      <div className="header">Welcome to Happy Puppy</div>
      <Link to="/Home">Search puppies !</Link>
      <br />
      <div className="framePic">
        <img src={img} alt="dogPic" className="dogPic" />
        <br />
        <button onClick={getRandomPic} className="btn">
          Click to See Random puppies
        </button>
      </div>
      <br />
      <div className="cardListSub">
        <div className="listsub">
          <button onClick={listSub} className="btn">
            See All Sub-Breeds &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          </button>
          <button onClick={clear} className="btn">
            X
          </button>
        </div>
        <div>
          {listSubBreeds.map((elements, index) => (
            <div>
              {index + 1}.{elements}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Login;
