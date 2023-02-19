import React, { useState, useEffect } from "react";
import placeholder from "../../img/placeholder.jpeg";

export const CharGen = () => {

	const [itemList, setItemList] = useState(["Loading..."])
	const apiURL = "https://www.swapi.tech/api/people"

	useEffect(() => {
			fetch(apiURL)
			.then(list => list.json())
			.then(list => setItemList(list.results))
	  }, []);

	return (
		<div className="row m-3 flex-row flex-nowrap overflow-scroll">
		{console.log(itemList)}
		{console.log("^ characters")}
		{itemList.map(entry => 
			<div className="card mx-2" style={{"width": "19rem"}}> 
				<img src={placeholder} className="card-img-top"></img>
				<div className="card-body">
					<h5 className="card-title">{entry.name}</h5>
					<div className="my-4">
						<a href={entry.url} type="button" className="btn btn-outline-primary float-start">Learn more</a>
						<button type="button" className="btn btn-outline-warning float-end">
							<i class="fa-solid fa-heart-circle-plus"></i>
						</button>
					</div>
				</div>
			</div>)}
			</div>
	)
}