const initialState = {
    cartItems: []
}

export default function cartItems(state=initialState, action){
    if(action.type == "addToCart"){
        let newState = [...state.cartItems];
        newState.push(action.payload)
        return {
            cartItems: newState
        };
    }
    return state;
    
}
