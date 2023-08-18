import './App.css';
import Navbar from './component/navbar/navbar';
import Hero from '../src/component/Hero/hero';
//import { useEffect, useState } from 'react';
//import axios from 'axios';
//import Grid from '@mui/material/Grid';
import Card from './component/Card/card';

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('https://qtify-backend-labs.crio.do/albums/top')
  //     .then(res => setData(res.data))
  //     .catch(err => alert(err))
  // })

  return (
    <div>
      <Navbar />
      <Hero />
      <Card/>     
    </div>
  );
}

export default App;
