import React, { useContext } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../img/placeholder.jpeg";
import { FavoriteCounter } from "../contexts/FavsContext.jsx"
import { SingleDisplay } from "../contexts/DisplayContext.jsx";


export const CardGen = (props) => {
    const {favCount, updateFavCount} = useContext(FavoriteCounter)
    const {updateSingleDisplay} = useContext(SingleDisplay)

return (
    <div className="card_rows row m-3 flex-row flex-nowrap overflow-scroll">
        
        {props.props.map(entry => 
        <div key={entry.name} className="card mx-2" style={{"width": "20rem"}}>

            <Link to={`/single/${entry.name}`} state={entry.url}
            onClick={() => {updateSingleDisplay({name: entry.name, url: entry.url})}}>
            <img src={placeholder} className="card-img-top"></img></Link>
            
            <div className="card-body">
                
                <h5 className="card-title text-capitalize">{entry.name}</h5>
                <div className="my-4">
                    
                    <Link to={`/single/${entry.name}`} state={entry.url}
                        type="button" className="btn btn-outline-primary float-start"
                        onClick={() => {
                            if (entry.name != "Loading...") updateSingleDisplay({name: entry.name, url: entry.url})
                        }}>
                        <small>Learn more</small>
                    </Link>
                    
                    <button type="button" 
                        onClick={() => {
                            if (entry.name != "Loading...") updateFavCount(favCount.concat({name: entry.name, url: entry.url}))
                        }} 
                        className="btn btn-outline-warning float-end">
                        <small>Add to favorites </small><i className="fa-solid fa-heart-circle-plus"></i>
                    </button>

                </div>
            </div>
        
        </div>)}         
    </div>
    )
}