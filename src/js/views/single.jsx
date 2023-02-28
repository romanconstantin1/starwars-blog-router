import React, { useState, useEffect, useContext } from "react";
import placeholder from "../../img/placeholder.jpeg";
import { FavoriteCounter } from "../contexts/FavsContext.jsx";
import { SingleDisplay } from "../contexts/DisplayContext.jsx";
import { Context } from "../store/appContext";

export const Single = () => {
	const {favCount, updateFavCount} = useContext(FavoriteCounter)
	const {singleDisplay} = useContext(SingleDisplay)

	const {store, actions} = useContext(Context)

	const [dataList, setDataList] = useState([])

	useEffect(() =>{
		fetch(singleDisplay.url)
		.then(list => list.json())
		.then(list => setDataList(list.result.properties))
	}, [singleDisplay])

	return (
		<div className="container-fluid text-center">
			<div className="row">

				<div className="col mx-1 my-2"> 
					<img src={placeholder} className="img-fluid"></img>
				</div>

				<div className="col mx-1 display-flex">
					<p className="fs-1 text-capitalize">{dataList.name}</p>
					
					<button type="button" className="btn btn-outline-warning" // Favorites button
					onClick={() => {
                        if (dataList.name != undefined)updateFavCount([...favCount, dataList.name])
					}}>
					Add to favorites <i className="fa-solid fa-heart-circle-plus"></i>
                    </button>

					<p className="fs-3 mt-3">A long time ago, in a galaxy far far away...</p>
				</div>
			</div>

			<div className="row m-2">
				{Object.keys(dataList)?.map((key) => { 	// This generates the list of details on the bottom
					const newKey = key.replace(/_/g, " ")
					if (newKey.length<=12 && key!="created" && key!="edited" 
						&& key!="url" && key!="name" && key!="homeworld" && key!="pilots") {
						//^ there HAS to be a better way to do this, right?
						// it's supposed to check 
						return (
							<div key={dataList[key]} className="col">			
								<p className="fs-3 text-capitalize">{newKey}</p>
								<p className="fs-4 text-capitalize">{dataList[key]}</p>
							</div>
						)
					}				
				}
				)}
			</div>	
		</div>
	)	
}