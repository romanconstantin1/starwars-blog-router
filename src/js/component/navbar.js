import React from "react";
import { Link } from "react-router-dom";
import definitely_star_wars from "../../img/definitely_star_wars.png";

export const Navbar = () => {
	return (
		<nav className="navbar bg-light">
  			<div className="container-fluid">
    			<a className="navbar-brand px-5"><img src={definitely_star_wars} height="75"></img></a>
				<div className="dropdown px-5">
  					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    					Favorites
					</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Empty list <i class="fa-solid fa-heart-circle-minus"></i></a></li>
					</ul>
					</div>
  			</div>
		</nav>
	);
};
