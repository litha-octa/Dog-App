/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

function Login() {
  const imgRandomAPi = "https://dog.ceo/api/breeds/image/random";
  const subBreeds = "https://dog.ceo/api/breed/hound/list";
  const breeds = "https://dog.ceo/api/breeds/list/all";
  const artikel =
    "     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  const [img, setImg] = useState("");
  const [listSubBreeds, setListSubBreeds] = useState([]);
  const [listBreeds, setListBreeds] = useState({});

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

  const listItemBreeds = () => {
    axios
      .get(breeds)
      .then((res) => {
        
        setListBreeds(res.data.message.key);
        console.log(listBreeds);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const clear = () => {
    setListSubBreeds([]);
    // listSubBreeds.clear();
  };
  useEffect(() => {
    getRandomPic();
  }, []);

  return (
    <div className="body">
      <div className="header">Puppy Gallery</div>
      <div className="content">
        <img
          src={img}
          alt="dogPic"
          onClick={getRandomPic}
          className="contentBg"
        />
        <div className="artikel">
          <p>{artikel}</p>
        </div>
        <div className="cardListSub">
          <div className="captionList">
            <div onClick={listSub} className="btn">
              See All Sub-Breeds
            </div>
            {/* <button onClick={listItemBreeds} className="btn">
              See All Breeds
            </button> */}
          </div>
          <div>
            {listSubBreeds.map((elements, index) => (
              <div>
                <div className="subBreedsItem">
                  {index + 1}. {elements}
                </div>
              </div>
            ))}
            {listSubBreeds == 0 ? null : (
              <div className="btnClear" onClick={clear}>
                Close
              </div>
            )}
          </div>
          <div>
          </div>
        </div>
        <Link to="/Galeri">galeri</Link>
      </div>
    </div>
  );
}

export default Login;
