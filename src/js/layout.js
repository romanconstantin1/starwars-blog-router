import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single.jsx";
import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

export const Layout = () => {

	return (
		<div>
			<BrowserRouter>
				<ScrollToTop>

							<Navbar />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/single/*" element={<Single />} />
								<Route path="/single/Loading..." element={<h1 className="mx-3 my-1">Not found!</h1>} />
							</Routes>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
