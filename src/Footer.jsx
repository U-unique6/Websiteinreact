import React from "react";

const Footer=()=>{
    const year = new Date().getFullYear();
    
    return(
        <>
        <div className="bg-light  p-2 d-flex justify-content-center flex-column align-items-center  text-center footer ">
            <p> &copy;  {year} Umanshi. All Right Reserved | Terms and Condition</p>
        </div>
        </>
    )
}

export default Footer;