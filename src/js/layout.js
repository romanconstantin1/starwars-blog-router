import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { FavoriteCounter } from "./contexts/FavsContext.jsx";
import { SingleDisplay } from "./contexts/DisplayContext.jsx";

export const Layout = () => {

	const [favCount, updateFavCount] = useState([])
	const [singleDisplay, updateSingleDisplay] = useState([])

	return (
		<div>
			<BrowserRouter>
				<ScrollToTop>

					<FavoriteCounter.Provider value={ {favCount, updateFavCount} }>
						<SingleDisplay.Provider value= { {singleDisplay, updateSingleDisplay} }>
							<Navbar />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/single/*" element={<Single />} />
								<Route path="/single/Loading..." element={<h1 className="mx-3 my-1">Not found!</h1>} />
							</Routes>
						</SingleDisplay.Provider>
					</FavoriteCounter.Provider>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
