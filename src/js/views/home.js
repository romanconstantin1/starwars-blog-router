import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import {CardGen} from "../component/card_gen"


export const Home = () => {
	const [charList, setCharList] = useState([])
	const [planetList, setPlanetList] = useState([])
	const [shipList, setShipList] = useState([])

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
		.then(list => list.json())
		.then(list => setCharList(list.results))
  	}, [])

	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets")
		.then(list => list.json())
		.then(list => setPlanetList(list.results))
  	}, [])

	useEffect(() => {
		fetch("https://www.swapi.tech/api/starships")
		.then(list => list.json())
		.then(list => setShipList(list.results))
  	}, [])

	return (
		<div>
			<h1 className="mx-3">Characters</h1>
			<CardGen props={charList}/>
			<h1 className="mx-3">Planets</h1>
			<CardGen props={planetList}/>
			<h1 className="mx-3">Vehicles</h1>
			<CardGen props={shipList}/>
		</div>
	);
};
