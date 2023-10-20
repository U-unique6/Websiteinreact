import React from "react";
import Web from './image/home.jpg';

import Common from "./Common";
const Home=()=>{
    return(
        <>
          <Common 
            name=" Grow your business with "
            visit="/service"
            imgsrc={Web}
            btnname="Get Started"

          />
        </>
    )
}

export default Home;