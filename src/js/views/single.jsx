import React, { useState, useEffect, useContext } from "react";
import placeholder from "../../img/placeholder.jpeg";
import { Context } from "../store/appContext";

export const Single = () => {

	const {store, actions} = useContext(Context)
	
	useEffect(() =>{
		fetch(store.singlefetch.url)
		.then(list => list.json())
		.then(list => actions.loadSomeData("singleview", list.result.properties))
	}, [store.singlefetch])

	return (
		<div className="container-fluid text-center">
			<div className="row">

				<div className="col mx-1 my-2"> 
					<img src={placeholder} className="img-fluid"></img>
				</div>

				<div className="col mx-1 display-flex">
					<p className="fs-1 text-capitalize">{store.singleview.name}</p>
					
					<button type="button" className="btn btn-outline-warning" // Favorites button
					onClick={() => {
                        actions.addToFavorites("favorites", {name: store.singleview.name, url: store.singleview.url})
					}}>
					Add to favorites <i className="fa-solid fa-heart-circle-plus"></i>
                    </button>

					<p className="fs-3 mt-3">A long time ago, in a galaxy far far away...</p>
				</div>
			</div>

			<div className="row m-2">
				{Object.keys(store.singleview)?.map((key) => { 	// This generates the list of details on the bottom of the single view
					const newKey = key.replace(/_/g, " ")
					const timeNow = new Date()
					
					if (newKey.length<=12 && key!="created" && key!="edited" 
						&& key!="url" && key!="name" && key!="homeworld" && key!="pilots") {
						//^ there HAS to be a better way to do this, right?
						// it's supposed to filter out a lot of unnecessary details
						
						return (
							<div className="col">			
								<p key={store.singleview[key] + timeNow} className="fs-3 text-capitalize">{newKey}</p>
								<p key={store.singleview[key] + timeNow + 1} className="fs-4 text-capitalize">{store.singleview[key]}</p>
							</div>
						)
					}				
				}
				)}
			</div>	
		</div>
	)	
}