import React, { useContext } from "react";
import { Link } from "react-router-dom";
import definitely_star_wars from "../../img/definitely_star_wars.png";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store, actions} = useContext(Context)

	let empty;
	if (store.favorites.length <= 0) {
		empty = <li className="dropdown-item">Favorites list is empty!</li>
	} 

	return (
		<nav className="navbar bg-light">
  			<div className="container-fluid">
    			<Link type="button" to="/" className="navbar-brand px-5">
					<img src={definitely_star_wars} height="75"></img>
				</Link>
				
				<div className="dropdown px-2">
  					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    					Favorites
						<span className="badge rounded-pill bg-secondary mx-2">{store.favorites.length}</span>
					</button>
					
					<ul className="dropdown-menu dropdown-menu-end">
						{empty}
						{store.favorites.map((entry) => {
							return (	
								<li key={entry.name} className="d-flex">
									<Link to={`/single/${entry.name}`} 
									state={entry.url}
									onClick={() => {
										actions.loadSomeData("singlefetch", {name: [entry.name], url: [entry.url]})
									}} 
									className="dropdown-item">
										{entry.name}
									</Link>
									<button className="deleteButton" onClick={(e) => {
										actions.removeFromFavorites("favorites", entry.name); e.stopPropagation()
									}}>
										<i className="fa-solid fa-heart-circle-minus my-auto" ></i>
									</button>	
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
