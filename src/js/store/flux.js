const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			singlefetch: [],
			singleview: [],			
			people: [{name: "Loading..."}],
			planets: [{name: "Loading..."}],
			ships: [{name: "Loading..."}]
		},
		actions: {
			loadSomeData: (key, passedData) => {
				setStore({"singleview" : {name : "Loading..."}}),
				setStore({[key] : passedData})
			},
			
			addToFavorites: (key, passedData) => {
				const storeCheck = getStore()[key]
				if (storeCheck.some(e => e.name === passedData.name)) 
					{alert(`${passedData.name} is already in your favorites list!`)
				} else {setStore({[key] : [...storeCheck, passedData]})}
			},

			removeFromFavorites: (key, passedData) => {
				const storeCheck = getStore()[key]
				if (storeCheck.some(e => e.name === passedData))
					{const updatedFavs = storeCheck.filter(entry => entry.name !== passedData);
					setStore({[key]: updatedFavs})}
			}
		}
	};
};

export default getState;
