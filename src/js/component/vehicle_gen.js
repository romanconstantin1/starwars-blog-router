import React, { useState, useEffect } from "react";
import vehicle_placeholder from "../../img/vehicle_placeholder.png";

export const VehicleGen = () => {

	const [itemList, setItemList] = useState(["Loading..."])
	const apiURL = "https://www.swapi.tech/api/starships"

	useEffect(() => {
			fetch(apiURL)
			.then(list => list.json())
			.then(list => setItemList(list.results))
	  }, []);

	return (
        itemList.map(entry => 
		<div className="card" style={{"width": "25rem"}}> 
			<img src={vehicle_placeholder} className="card-img-top"></img>
  			<div className="card-body">
   				<h5 className="card-title">{entry.name}</h5>
    			<ul className="list-unstyled">
					<li>Crew: </li>
					<li>Hyperdrive rating: </li>
					<li>Cost in credits: </li>
				</ul>	
				<div>
   					<button type="button" className="btn btn-outline-primary float-start">Learn more</button>
					<button type="button" className="btn btn-outline-warning float-end">Heart emoji</button>
				</div>
  			</div>
		</div>)
	)	
	};