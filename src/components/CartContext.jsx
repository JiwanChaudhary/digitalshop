import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';

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

export let CartProvider = ({ children } ) => {
  let [state, dispatch] = useReducer(reducer, { cart: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};