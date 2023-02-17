import React from "react";
import "../../styles/home.css";
import { CharGen } from "../component/char_gen";
import { PlanGen } from "../component/planet_gen";
import { VehicleGen } from "../component/vehicle_gen";


export const Home = () => {
	return (
		<div>
			<CharGen />
			<PlanGen />
			<VehicleGen />
		</div>
	);
};
