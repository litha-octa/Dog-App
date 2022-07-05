import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import FlatList from "flatlist-react";


function Galeri() {
 
  const [imgSubRndm, setImgSubRndm] = useState([]);
  const [param, setParam] = useState("");
  const [jumlah, setJumlah] = useState("");

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
    <div className="body">
      <div className="title">Galeri</div>
      
      <h1>Cari foto berdasarkan sub-breed</h1>
      <div className="searchBar">
        <select name="param" onChange={(e) => setParam(e.target.value)}>
          Pilih Jenis Sub-Breed
          <option>...</option>
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
      </div>
      {imgSubRndm === 0 ? (
        <div></div>
      ) : (
        <div className="imgContainer">
          {imgSubRndm.map((i) => (
            <div className="columnMax" >
              <img src={i} className="itemSubImg" alt="Dog Pic Here" />
            </div>
          ))}
          
        </div>
      )}

      
      <div></div>
      <Link to="/">Kembali..</Link>
    </div>
  );
}

export default Galeri;
