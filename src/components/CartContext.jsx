import { createContext, useReducer, useState } from "react";
import PropTypes from "prop-types";

var CartContext = createContext();
let reducer = (state, action) => {
  switch (action.type) {
    case "addtocart":
      return { ...state, cart: [...state.cart, { ...action.payload }] };
    case "removefromcart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
  }
};

export let CartProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, { cart: [] });
  const [allProducts, setAllProducts] = useState([]);

  return (
    <CartContext.Provider
      value={{ state, dispatch, allProducts, setAllProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
