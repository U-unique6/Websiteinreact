import React, { useState } from "react";
const Contact=()=>{
const[data , setdata]=useState({
    fname:"",
    email :"",
    phone :"",
    message:"",
    password :"",
})

const inputEvent=(e)=>{
    const{name , value}=e.target;
    setdata((prevalue)=>{
        return {
            ...prevalue ,
            [name]:value,
            
        }
    })
}
    const SubmitEvent=(e)=>{
        e.preventDefault();
        alert(`Your name is ${data.fname} , your name is  ${data.email} , phone no is ${data.phone} and your message is ${data.message}.  You are successfully submit this form! Our team will me contact soon`);
        setdata();
    }
    return(
        <>
            <div className="my-2">
                <h1 className="text-center ">Contact Us</h1>

            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={SubmitEvent}>
                        <div className="mb-2">
    <label htmlFor="exampleInputname1" className="form-label">Enter Name</label>
    <input 
    type="text" 
    className="form-control"
     id="exampleInputname1"
     value={data.fname}
      onChange={inputEvent}
      name="fname"
       />

  </div>
                        <div className="mb-2">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value ={data.email}  onChange={inputEvent} name="email"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-2">
    <label htmlFor="exampleInputnumber1" className="form-label">Enter your Phone No</label>
    <input type="number" className="form-control" id="exampleInputnumber1" value={data.phone}  onChange={inputEvent} name="phone"/>
  </div>
  <div className="mb-2">
    <label htmlFor="exampleInputmessage1" className="form-label">Message</label>
    
    <textarea value={data.message}  onChange={inputEvent}className="form-control" id="exampleInputPassword1" name="message"></textarea>
  </div>
  <div className="mb-2">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={data.password}  onChange={inputEvent}/>
  </div>
 
  <button type="submit" className="btn btn-primary mb-3 ">Submit</button>  
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;