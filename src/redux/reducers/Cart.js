import { productsTypes } from "../ActionTypes/productsTypes";

const initialState = {
	data: [],
	isLoading: false,
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case productsTypes.FETCH_ALL_PRODUCTS:
			console.log("!!!", action.payload);
			return { ...state, data: action.payload };

		case productsTypes.ADD_NEW_PRODUCT:
			return { ...state, data: [...state.data, action.payload] };

		case productsTypes.LOAD_PRODUCTS_LOADING:
			return { ...state, isLoading: action.payload };

		default:
			return state;
	}
};

export default productsReducer;
