import { combineReducers } from "redux";
import { breedListReducer } from "./breedListReducer";
import { browseDogReducer } from "./browseDogReducer";
import { dogsByBreedReducer } from "./dogsByBreedReducer";
import { productDetailReducer } from "./productDetailReducer";
import { productsReducer } from "./productsReducer";
import { dogImageReducer } from "./randomImageReducer";
import { randomUserReducer } from "./randomUserReducer";

export const reducer = combineReducers({
    products:productsReducer,
    productDetail: productDetailReducer,
    dogImage: dogImageReducer,
    breedData: browseDogReducer,
    breedImages: dogsByBreedReducer,
    randomUser:randomUserReducer,
    breedList: breedListReducer
})