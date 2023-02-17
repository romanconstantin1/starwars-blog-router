import React from "react";
import plan_placeholder from "../../img/plan_placeholder.jpg";

export const PlanGen = () => {
	return (
		<div class="card" style={{"width": "25rem"}}> 
			<img src={plan_placeholder} class="card-img-top"></img>
  			<div class="card-body">
   				<h5 class="card-title">Planet name</h5>
    			<p class="card-text">Example text</p>
				<div>
   					<button type="button" class="btn btn-outline-primary float-start">Learn more</button>
					<button type="button" class="btn btn-outline-warning float-end">Heart emoji</button>
				</div>
  			</div>
		</div>
    );
;}