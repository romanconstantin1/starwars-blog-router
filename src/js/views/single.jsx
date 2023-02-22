import React, { useState, useEffect, useContext, prevState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import placeholder from "../../img/placeholder.jpeg";
import { FavoriteCounter } from "../FavoritesContext/FavsContext.jsx"

//todo: add context for favorites list

export const Single = (props) => {
	const location = useLocation()
	const state = location.state

	const {favCount, updateFavCount} = useContext(FavoriteCounter)

	const [dataList, setDataList] = useState([])

	useEffect(() =>{
		fetch(state)
		.then(list => list.json())
		.then(list => setDataList(list.result.properties))
	}, [])

	return (
		<div className="container-fluid text-center">
			<div className="row">
				<div className="col mx-1 my-2">
					<img src={placeholder} className="img-fluid"></img>
				</div>
				<div className="col mx-1 display-flex">
					<p className="fs-1 text-capitalize">{dataList.name}</p>
					<button type="button" className="btn btn-outline-warning" onClick={() => {
                        if (dataList.name != undefined)updateFavCount([...favCount, dataList.name])}}>
					Add to favorites <i className="fa-solid fa-heart-circle-plus"></i>
                    </button>
					<p className="fs-3 mt-3">A long time ago, in a galaxy far far away...</p>
				</div>
			</div>

			<div className="row m-2">
				{Object.keys(dataList)?.map((key) => {
					const newKey = key.replace(/_/g, " ")
					if (newKey.length<=12 && key!="created" && key!="edited" && key!="url" && key!="name" && key!="homeworld" && key!="pilots") {
						//^ there HAS to be a better way to do this, right?
					return (
					<div className="col">			
						<p className="fs-3 text-capitalize">{newKey}</p>
						<p className="fs-4 text-capitalize">{dataList[key]}</p>
					</div>
					)}				
					}
				)}
			</div>	
		</div>
	)	
}