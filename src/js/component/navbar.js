import React, { useContext } from "react";
import { Link } from "react-router-dom";
import definitely_star_wars from "../../img/definitely_star_wars.png";
import { FavoriteCounter } from "../contexts/FavsContext.jsx";
import { SingleDisplay } from "../contexts/DisplayContext.jsx";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store, actions} = useContext(Context)
	const favs = store.favorites
	return (
		<nav className="navbar bg-light">
  			<div className="container-fluid">
    			<Link to="/" className="navbar-brand px-5"><img src={definitely_star_wars} height="75"></img></Link>
				
				<div className="dropdown px-2">
  					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    					Favorites
						<span className="badge rounded-pill bg-secondary mx-2">{favs.length}</span>
					</button>
					
					<ul className="dropdown-menu dropdown-menu-end">
						{favs.map((entry) => {
							return (	
								<li key={entry.name} className="display-inline">
									<Link to={`/single/${entry.name}`} 
									state={entry.url}
									onClick={() => {actions.loadSomeData("singleview", {name: [entry.name], url: [entry.url]})
										}} 
									className="dropdown-item">
										{entry.name}
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
