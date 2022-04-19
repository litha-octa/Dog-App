import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

function Galeri() {
  const [imgSub, setImgSub] = useState([]);
  const [imgSubRndm, setImgSubRndm] = useState([]);
  const [param, setParam] = useState("");
  const addString = () => setParam(param);
  const [jumlah, setJumlah] = useState("");

  const imgSubApi = `https://dog.ceo/api/breed/hound/afghan/images`;
  const imgSubRndmApi = `https://dog.ceo/api/breed/hound/${param}/images/random/${param}`;

  function imgApi(param) {
    axios
      .get(`https://dog.ceo/api/breed/hound/${param}/images`)
      .then((res) => {
        console.log(res.data);
        setImgSub(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getSubRndmPic(x, y) {
    axios
      .get(`https://dog.ceo/api/breed/hound/${x}/images/random/${y}`)
      .then((res) => {
        console.log(res.data);
        setImgSubRndm(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="title">Galeri</div>
      <button onClick={() => imgApi("afghan")}>kllik</button>

      <select name="param" onChange={(e) => setParam(e.target.value)}>
        <option>....</option>
        <option value="afghan">Afghan</option>
        <option value="basset">Baset</option>
        <option value="blood">Blood</option>
        <option value="english">English</option>
        <option value="ibizan">Ibizan</option>
        <option value="plott">Plott</option>
        <option value="walker">Walker</option>
      </select>
      <input
        text
        value={jumlah}
        name="jumlah"
        onChange={(e) => setJumlah(e.target.value)}
      />
      <button onClick={() => getSubRndmPic(param, jumlah)}>Cari !</button>
      {imgSubRndm == 0 ? (
        <div></div>
      ) : (
        <div className="imgSubRndm">
          {imgSubRndm.map((i) => (
            <div>
              <img src={i} className="itemSubImg" />
            </div>
          ))}
        </div>
      )}

      {imgSub == 0 ? (
        <div>text</div>
      ) : (
        <img src={imgSub[5]} alt="dogPic" className="dogPic" />
      )}

      <div></div>
      <Link to="/">Kembali..</Link>
    </div>
  );
}

export default Galeri;
