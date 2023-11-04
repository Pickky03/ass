export const getAllProduct = async () => {
	return fetch("http://localhost:3001/products")
		.then((res) => {
			console.log(res);
			return res.json();
		})
		.catch((err) => console.log(err));
};

export const addProduct = async (product) => {
	return fetch("http://localhost:3001/products", {
		method: "POST",
		body: JSON.stringify(product),
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "same-origin",
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));
};
