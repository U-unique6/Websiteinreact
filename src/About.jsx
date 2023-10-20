import React from "react";
import Common from "./Common";
import Web from './image/home.jpg';
const About=()=>{
    return(
        <>
            <Common
                 name=" Welcome to About page "
            visit="/contact"
            imgsrc={Web}
            btnname="Contact Us"
            />
        </>
    )
}

export default About;