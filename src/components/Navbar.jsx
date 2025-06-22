import { useState, useRef,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav style={{ display: 'flex', 
                  gap: '1rem', 
                  padding: '1rem',
                  alignItems: "baseline", 
                  justifyContent: 'space-between',
                  fontFamily: "'Times New Roman', Times, serif"
                }}>
      <Link to="/"><h1><strong>Home of Amy Liu</strong></h1></Link>
      <div style={{ display: 'flex', gap: '1rem'}}>
        <Link to="/about"><strong>About</strong></Link>
        <Link to="/projects"><strong>Projects</strong></Link>
      </div> 
    </nav>
  );
}
