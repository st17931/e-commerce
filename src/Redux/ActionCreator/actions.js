export const toggleAdcSection = ()=>{
    return{
        type:"toggle"
    }
}

export const addToCart = (product)=>{
    return {
        type:"addToCart",
        payload:product
    }
}

export const removeFromCart = (product)=>{
    return{
        type:"removeFromCart",
        payload:product
    }
}