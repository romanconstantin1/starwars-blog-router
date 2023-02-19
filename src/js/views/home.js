import React from "react";
import "../../styles/home.css";
import { CharGen } from "../component/char_gen";
import { PlanGen } from "../component/planet_gen";
import { VehicleGen } from "../component/vehicle_gen";


export const Home = () => {
	return (
		<div>
			<h1 className="mx-3">Characters</h1>
			<CharGen />
			<h1 className="mx-3">Planets</h1>
			<PlanGen />
			<h1 className="mx-3">Vehicles</h1>
			<VehicleGen />
		</div>
	);
};
