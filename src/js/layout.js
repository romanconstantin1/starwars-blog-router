import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { FavoriteCounter } from "./FavoritesContext/FavsContext.jsx";

export const Layout = () => {

	const [favCount, updateFavCount] = useState([])

	return (
		<div>
			<BrowserRouter>
				<ScrollToTop>

					<FavoriteCounter.Provider value={ {favCount, updateFavCount} }>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/single/*" element={<Single />} />
						<Route path="/single/Loading..." element={<h1 className="mx-3 my-1">Not found!</h1>} />
					</Routes>
					</FavoriteCounter.Provider>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
