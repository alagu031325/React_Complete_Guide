// context values are stored in folder named 'store' - because it is the data and state store for entire application/or for multiple components
import { createContext, useState } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

//creates context value with initial value for better auto completion but value defined in Provider component will be used
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {}
});

// create and share a component function which manage all context data and provide data to the application
export default function CartContextProvider({children}) {
    const [shoppingCart, setShoppingCart] = useState({
        items: [],
      });
    
    function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
        const updatedItems = [...prevShoppingCart.items];

        const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
        const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
        } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
            id: id,
            name: product.title,
            price: product.price,
            quantity: 1,
        });
        }

        return {
        items: updatedItems,
        };
    });
    }

    function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
        const updatedItems = [...prevShoppingCart.items];
        const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
        );

        const updatedItem = {
        ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += amount;

        if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
        } else {
        updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
        items: updatedItems,
        };
    });
    }

    const ctxValue = {
        items: shoppingCart.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity
    }
    
    // using the context value as a react component <CartContext> works in React 19 for older versions we need to use the Provider property which holds a React component in the end
    return <CartContext.Provider value={ctxValue}>
        {children}
    </CartContext.Provider>
} 

