import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { CardGen } from "../component/card_gen.jsx"
import { Context } from "../store/appContext";


export const Home = () => {
	const [charList, setCharList] = useState([{name: "Loading..."}])
	const [planetList, setPlanetList] = useState([{name: "Loading..."}])
	const [shipList, setShipList] = useState([{name: "Loading..."}])

	const {store} = useContext(Context)
	
	return (
		<div>
			<h1 className="mx-3">Characters</h1>
			<CardGen props={store.people}/>
			<h1 className="mx-3">Planets</h1>
			<CardGen props={store.planets}/>
			<h1 className="mx-3">Vehicles</h1>
			<CardGen props={store.ships}/>
		</div>
	);
};
