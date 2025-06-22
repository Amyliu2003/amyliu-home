import React from 'react';
import { useState, useRef,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import home from '../assets/home.png';

const imgStyle = {
    width: '50vw',
    height: '32vw',
    display: 'block',
    objectFit: 'cover',
    border: "1px solid #fff"
  };

export function Slides() {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly" }}>
    <img
      src={home}
      alt="Home Slide"
      style={imgStyle}
    />
  </div>
  );
}
