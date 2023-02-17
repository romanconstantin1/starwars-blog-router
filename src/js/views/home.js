import React from "react";
import "../../styles/home.css";
import { CharGen } from "../component/char_gen";
import { PlanGen } from "../component/plan_gen";

//<CharGen />
//<PlanGen />
export const Home = () => {
	return (
		<div>
			<CharGen />
			<PlanGen />
		</div>
	);
};
