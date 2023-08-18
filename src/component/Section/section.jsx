import React from "react";
import { useEffect, useState } from "react";
import Cardalbum from "../Cardalbum/card.jsx";
import { fetchData } from "../Api/api.js";
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import "./section.css";

function Section() {
  const [data, setData] = useState([]);
  const[togg,setTogg]=useState(false)

  const getData = async () => {
    try {
      let response = await fetchData();
      setData(response);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handletoggle=()=>{
    setTogg(true)
  }
  return (
    <>
      <div className="section">
        <div className="section-header">
          <h3 className="album-header">Top Albums</h3>
          <h4 className="toggle" onClick={handletoggle}>
            {togg===true ? "Show All" : "Collapse"}</h4>
        </div>
        <div className="cardalbum">
          {data.length === 0 ? (
             <Box md={{ display: 'flex' }}>
             <CircularProgress />
           </Box>
          ) : (
            data.map((item) => {
              const { title, image, follows,id } = item;
              return (
                <>
                  <Cardalbum title={title} image={image} follows={follows} key={id} />
                </>
              )
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Section;
