import { configureStore } from "@reduxjs/toolkit";
import addToCartSection from "./Reducers/addToCartSection";
import cartItems from "./Reducers/cartItems";

const store = configureStore({
    reducer:{
        toggleAdc: addToCartSection,
        addItemToCart:cartItems
    }
})

export default store;