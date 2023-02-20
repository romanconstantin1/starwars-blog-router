import React, { useState, useEffect, useContext, prevState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useLocation } from "react-router-dom";


export const Single = (props) => {
	const location = useLocation()
	const state = location.state

	const [dataList, setDataList] = useState([])


	useEffect(() =>{
		fetch(state)
		.then(list => list.json())
		.then(list => setDataList(list.result.properties)
		)
	}, [])

	return (
		<div>
			{Object.keys(dataList).forEach((key) => {
				console.log(key, dataList[key])
				//logic for accessing data goes here
				}
			)}
		</div>
	)	
}
	
	
/*	
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};*/
