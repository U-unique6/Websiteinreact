import React from "react";

import { NavLink } from "react-router-dom";
const Common=(props)=>{
    return(
        <>
          <section id="header" className="d-flex align-items-center">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex  flex-column justify-content-center heading ">
                            <h1>{props.name}<strong>Umanshi</strong></h1>
                            <h2 className="my-2">We are the team of talented react developer making websites</h2>
                            <div className=" mt-2">
                                <NavLink to={props.visit} className="btn btn-get-started ">{props.btnname}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="home image"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
           </section>
        </>
    )
}

export default Common;