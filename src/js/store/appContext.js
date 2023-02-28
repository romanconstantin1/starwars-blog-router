import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			fetch("https://www.swapi.tech/api/people")
			.then(charList => charList.json())
			.then(charList => state.actions.loadSomeData("people", charList))
			.then(console.log(state.store));

			fetch("https://www.swapi.tech/api/planets")
			.then(planList => planList.json())
			.then(planList => state.actions.loadSomeData("planets", planList));

			fetch("https://www.swapi.tech/api/starships")
			.then(shipList => shipList.json())
			.then(shipList => state.actions.loadSomeData("ships", shipList))
		}, []);

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
