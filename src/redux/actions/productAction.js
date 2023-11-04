import { getAllProduct, addProduct } from "../../apis/index.js";
import { productsTypes } from "../ActionTypes/productsTypes.js";

export const fetchAllProduct = () => async (dispatch) => {
	try {
		dispatch({
			type: productsTypes.LOAD_PRODUCTS_LOADING,
			payload: true,
		});
		const res = await getAllProduct();
		console.log(res);
		dispatch({
			type: productsTypes.FETCH_ALL_PRODUCTS,
			payload: res,
		});
	} catch (err) {
		console.log(err);
	} finally {
		dispatch({
			type: productsTypes.LOAD_PRODUCTS_LOADING,
			payload: false,
		});
	}
};

export const addNewProduct = (data) => async (dispatch) => {
	try {
		dispatch({
			type: productsTypes.LOAD_PRODUCTS_LOADING,
			payload: true,
		});
		const res = await addProduct(data);
		dispatch({
			type: productsTypes.ADD_NEW_PRODUCT,
			payload: res,
		});
	} catch (err) {
		console.log(err);
	} finally {
		dispatch({
			type: productsTypes.LOAD_PRODUCTS_LOADING,
			payload: false,
		});
	}
};
