import React, { Component,useState } from 'react';
import "./Main.css";

const Main=()=>{
    const [PresentRs , UpdatedRs]=useState(" ");

    const Change=(event)=>{
    UpdatedRs(event.target.value / 161);
            //UpdatedRs(PresentRs / 161);
        }
    

    return (
            <div className="fix bg-primary pt-5 pb-5 pl-5 pr-5">
                <div className="h2 text-center text-white mb-4">PKR TO USD CONVERTER</div>
                <div className="h4 text-center text-white mb-4">1 PKR = 0.00621 USD</div>
            <div className="d-flex justify-content-center">
                <label className="text-white h3 mr-3">Rs</label>
                <input name="Rs" className="form-control w-50" onChange={Change}></input>
            </div>            
            <div className="d-block justify-content-center mt-3">
                <label className="text-white h3 d-block text-center">USD</label>
                <h1 className="text-center text-white">{PresentRs}</h1>
            </div>
            </div>
        )
    }


export default Main;
//1 PKR = 0.0095 USD