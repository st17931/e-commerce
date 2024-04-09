const initialState = {
    is:false
};

export default function addToCartSection(state=initialState, action){
    if(action.type === "toggle"){
        return {
            ...state,
            is: !state.is
        }
    }
    return state;
}