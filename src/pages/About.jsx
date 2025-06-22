import { useState, useRef,useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Slides } from '../components/Slides';



export function About() {

    return(
        <div>
        <div style={{position:"absolute" ,backgroundColor:"whitesmoke", width:"700px" , height: "500px" , opacity: "0.5",}}>
        </div>
        <Slides />
        </div>
       
    )
}