import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import placeholder from "../../img/placeholder.jpeg";

export const CardGen = (props) => {
    const {store, actions} = useContext(Context)


return (
    <div className="card_rows row m-3 flex-row flex-nowrap overflow-scroll">
        
        {props.props.map(entry => 
            <div key={entry.name} className="card mx-2" style={{"width": "20rem"}}>
                
                <Link to={`/single/${entry.name}`} state={entry.url}
                onClick={() => {actions.loadSomeData("singlefetch", 
                {name: [entry.name], url: [entry.url]})
                }}>
                    <img src={placeholder} className="card-img-top"></img>
                </Link>
            
                <div className="card-body">
                
                    <h5 className="card-title text-capitalize">{entry.name}</h5>
                    <div className="my-4">
                    
                    <Link to={`/single/${entry.name}`} state={entry.url}
                    type="button" className="btn btn-outline-primary float-start"
                    onClick={() => {
                        if (entry.name != "Loading...") {
                            actions.loadSomeData("singlefetch", 
                            {name: [entry.name], url: [entry.url]})
                        }
                    }}> 
                        <small>Learn more</small>
                    </Link>
                    
                    <button type="button" className="btn btn-outline-warning float-end"
                    onClick={() => {
                        if (entry.name != "Loading...") {
                            actions.addToFavorites("favorites",
                            {name: entry.name, url: entry.url})
                        }
                    }}>
                        <small>Add to favorites </small><i className="fa-solid fa-heart-circle-plus"></i>
                    </button>

                </div>
            </div>
        
        </div>)}         
    </div>
    )
}