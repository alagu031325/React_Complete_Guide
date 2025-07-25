// context values are stored in folder named 'store' - because it is the data and state store for entire application/or for multiple components
import { createContext, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

//creates context value with initial value for better auto completion but value defined in Provider component will be used
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {}
});

// we always get the latest state snapshot maintained by useReducer
function shoppingCartReducer(state, action) {
    // Handle different actions that lead to different state updates
    if(action.type === 'ADD_ITEM') {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
        const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
        } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
        updatedItems.push({
            id: action.payload,
            name: product.title,
            price: product.price,
            quantity: 1,
        });
        }

        return {
            items: updatedItems,
        };
    } else if(action.type === 'UPDATE_ITEM') {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
        );

        const updatedItem = {
            ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += action.payload.amount;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
        };
    
    }

    // need to return updated state
    return state;
}

// create and share a component function which manage all context data and provide data to the application
export default function CartContextProvider({children}) {
    const [ shoppingCartState, shoppingCartDispatch ] = useReducer(shoppingCartReducer, {
        items:[],
    });
    
    function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: 'ADD_ITEM',
            payload: id
        });
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type: 'UPDATE_ITEM',
            payload: {
                productId,
                amount
            }
        })
        
    }

    const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity
    }
    
    // using the context value as a react component <CartContext> works in React 19 for older versions we need to use the Provider property which holds a React component in the end
    return <CartContext.Provider value={ctxValue}>
        {children}
    </CartContext.Provider>
} 

