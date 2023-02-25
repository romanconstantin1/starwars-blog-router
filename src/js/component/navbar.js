import React, { useContext } from "react";
import { Link } from "react-router-dom";
import definitely_star_wars from "../../img/definitely_star_wars.png";
import { FavoriteCounter } from "../contexts/FavsContext.jsx";
import { SingleDisplay } from "../contexts/DisplayContext.jsx";

export const Navbar = () => {

	const {favCount} = useContext(FavoriteCounter)
	const {updateSingleDisplay} = useContext(SingleDisplay)

	return (
		<nav className="navbar bg-light">
  			<div className="container-fluid">
    			<Link to="/" className="navbar-brand px-5"><img src={definitely_star_wars} height="75"></img></Link>
				
				<div className="dropdown px-2">
  					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    					Favorites
						<span className="badge rounded-pill bg-secondary mx-2">{favCount.length}</span>
					</button>
					
					<ul className="dropdown-menu dropdown-menu-end">
						{Object.keys(favCount)?.map((entry) => {
							return (	
								<li key={favCount[entry].name} className="display-inline">
									<Link to={`/single/${favCount[entry].name}`} 
									state={favCount[entry].url}
									onClick={() => {updateSingleDisplay({name: favCount[entry].name, url: favCount[entry].url})}} 
									className="dropdown-item">
										{favCount[entry].name}
									</Link>
									<i className="fa-solid fa-heart-circle-minus my-auto"></i>
								    
								</li>
							)
						}
					)}
					</ul>
					</div>
  			</div>
		</nav>
	);
};
