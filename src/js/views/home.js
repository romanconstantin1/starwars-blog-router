import React, { useContext } from "react";
import { CardGen } from "../component/card_gen.jsx"
import { Context } from "../store/appContext";


export const Home = () => {
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
