const HOSTNAME = "https://3001-brian07-proyectofinal-8a1fpt7brtc.ws-eu79.gitpod.io"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favoritos:[],
			productos:[]


		},
		
		actions: {
			saveProductsStore: async () =>{
				const store = getStore()
				const response = await fetch(process.env.BACKEND_URL+"/api/store")
				const data = await response.json()
				setStore({productos:data})
			},

			getProductos: async () => {
				const res = await fetch(`${HOSTNAME}/admin/producto/${titulo}`,
				{
					method:"GET",
					headers:{"Content-Type" : "application/json"}
				}
				)
				
				const data = await res.json()
				setStore({productos:data})
			},

			getFavoritos: (producto) =>{
				const store= getStore()
				let auxFavoritos = [...store.favoritos]
				let objetoFavoritos = {
					"id":auxFavoritos.length,"producto":producto
				}
				auxFavoritos.push(objetoFavoritos)
				setStore({favoritos : auxFavoritos})
			},
			
			deleteFavoritos: (id) =>{
				const store = getStore()
				console.log(id)
				const filtrados = store.favoritos.filter(favorito => favorito.id !== id)
				setStore({favoritos : filtrados})
			},





			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
