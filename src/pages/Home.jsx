import React from 'react';
import { useState, useRef,useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Slides } from '../components/Slides';



export function Home() {

    return(
       <Slides />
    )
}