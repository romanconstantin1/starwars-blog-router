const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			singleview: [],
			people: [{name: "Loading..."}],
			planets: [{name: "Loading..."}],
			ships: [{name: "Loading..."}]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: (key, passedData) => {
				setStore({[key] : passedData})
			},
			addToFavorites: (key, passedData) => {
				setStore({[key] : passedData})
			},
			removeFromFavorites: (key, passedData) => {
				//do stuff here
			}

		}
	};
};

export default getState;
