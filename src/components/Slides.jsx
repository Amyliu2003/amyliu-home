import { useState, useRef,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import home from '../assets/home.png';

export function Slides() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
    <img
      src={home}
      alt="Home Slide"
      style={{
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        objectFit: 'cover',
      }}
    />
  </div>
  );
}
