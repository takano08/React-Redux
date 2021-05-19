export const FETCH_ORDERS_HISTORY = "FETCH_ORDERS_HISTORY";
export const fetchOrdersHistoryAction = (history) => {
    return {
        type: "FETCH_ORDERS_HISTORY",
        payload: history
    }
}

export const FETCH_PRODUCTS_IN_CART = "FETCH_PRODUCTS_IN_CART";
export const fetchProductsInCartAction = (products) => {
    return {
        type: "FETCH_PRODUCTS_IN_CART",
        payload: products
    }
}

export const SIGN_IN ="SIGN_IN";
export const signINAction = (useState) => {
    return {
        type: "SIGN_IN",
        payload: {
            isSignedIn: true,
            role: useState.role,
            uid: useState.uid,
            username: useState.username
        }
    }
};


export const SIGN_OUT ="SIGN_OUT";
export const signOutAction = () => {
    return {
        type: "SIGN_OUT",
        payload: {
            isSignedIn: false,
            role:"",
            uid: "",
            username: ""
        }
    }
};