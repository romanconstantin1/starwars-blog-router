import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../img/placeholder.jpeg";

export const CardGen = (props) => {

console.log(props.props)

return (
    <div className="row m-3 flex-row flex-nowrap overflow-scroll">
        {props.props.map(entry => 
        <div className="card mx-2" style={{"width": "19rem"}}> 
            <img src={placeholder} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{entry.name}</h5>
                <div className="my-4">
                    <Link to={`/single/${entry.uid}`} type="button" className="btn btn-outline-primary float-start">Learn more</Link>
                    <button type="button" className="btn btn-outline-warning float-end">
                        <i class="fa-solid fa-heart-circle-plus"></i>
                    </button>
                </div>
            </div>
        </div>)}
    </div>
    )
}