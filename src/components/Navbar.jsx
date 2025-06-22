import React from 'react';
import { useState, useRef,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Nav.css'


const fontStyle = {fontSize: "150%"};


export function Navbar() {
  return (
    <nav class="navbar" style={{ display: 'flex', 
                  width:"50vw",
                  gap: '1rem', 
                  padding: '1rem',
                  alignItems: "baseline", 
                  justifyContent: 'space-between',
                  margin: '0 auto' ,
                  fontFamily: "'Times New Roman', Times, serif"
                }}>
      <Link to="/"><h1><strong>Home of Amy Liu</strong></h1></Link>
      <div style={{ display: 'flex', gap: '1rem'}}>
        <Link style={fontStyle} to="/about"><strong>About</strong></Link>
        <Link style={fontStyle} to="/projects"><strong>Projects</strong></Link>
      </div> 
    </nav>
  );
}
