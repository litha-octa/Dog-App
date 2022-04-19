import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Galeri(props){
  const elements = "anak anjengg"
    return (
      <div>
        <div className="title">
          Galeri
        </div>
        <div>
        </div>
        <Link to="/">Kembali..</Link>
      </div>
    );
}

export default Galeri;
