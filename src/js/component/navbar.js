import React from "react";
import { Link } from "react-router-dom";
import definitely_star_wars from "../../img/definitely_star_wars.png";

export const Navbar = () => {
	return (
		<nav class="navbar bg-light">
  			<div class="container-fluid">
    			<a class="navbar-brand px-5"><img src={definitely_star_wars} height="75"></img></a>
				<div class="dropdown px-5">
  					<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    					Favorites
					</button>
					<ul class="dropdown-menu">
						<li class="inline">
							<a class="dropdown-item" href="#">Action</a>
							<a class="dropdown-item" href="#">Delete</a>
						</li>
						<li><a class="dropdown-item" href="#">Action two</a></li>
						<li><a class="dropdown-item" href="#">Action three</a></li>
					</ul>
					</div>
  			</div>
		</nav>
	);
};
