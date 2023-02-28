const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: ["test", "things", "stuff"],
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
				setStore({[key] : passedData.results})
			}
		}
	};
};

export default getState;
