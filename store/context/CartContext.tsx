'use client';

import { createContext, use, useEffect, useReducer } from 'react';
import { toast } from 'sonner';
import type { Cart, CartAction, CartContextType, CartItem } from '@/types/cart';
import type { Product } from '@/types/product';

const CART_STORAGE_KEY = 'ecommerce-cart';
const CartContext = createContext<CartContextType | null>(null);

const INITIAL_CART: Cart = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

function calculateTotals(items: CartItem[]): Pick<Cart, 'totalItems' | 'totalPrice'> {
  return items.reduce(
    (acc, item) => ({
      totalItems: acc.totalItems + item.quantity,
      totalPrice: acc.totalPrice + item.price * item.quantity
    }),
    { totalItems: 0, totalPrice: 0 }
  );
}

function withTotals(items: CartItem[]): Cart {
  return { items, ...calculateTotals(items) };
}

function cartReducer(state: Cart, action: CartAction): Cart {
  const { items } = state;

  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity } = action;

      const isExisting = items.some((i) => i.id === product.id);
      const customizeItems = isExisting
        ? items.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i))
        : [...items, { ...product, quantity }];

      return withTotals(customizeItems);
    }

    case 'REMOVE_ITEM': {
      return withTotals(items.filter((i) => i.id !== action.productId));
    }

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action;

      if (quantity <= 0) {
        return withTotals(items.filter((i) => i.id !== productId));
      }
      const customizeItems = items.map((i) => (i.id === productId ? { ...i, quantity } : i));
      return withTotals(customizeItems);
    }

    case 'CLEAR':
      return INITIAL_CART;

    case 'HYDRATE':
      return withTotals(action.items);

    default:
      return state;
  }
}

function loadCartFromStorage(): CartItem[] | null {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      const { items = [] } = JSON.parse(stored) as { items?: CartItem[] };
      return items;
    }
  } catch {
    console.error('Failed to parse cart from localStorage');
  }
  return null;
}

function persistedCartReducer(state: Cart, action: CartAction): Cart {
  const nextState = cartReducer(state, action);

  if (action.type !== 'HYDRATE') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ items: nextState.items }));
  }

  return nextState;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(persistedCartReducer, INITIAL_CART);

  useEffect(() => {
    const items = loadCartFromStorage();
    if (items && items.length > 0) {
      dispatch({ type: 'HYDRATE', items });
    }
  }, []);

  const addToCart = (product: Product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', product, quantity });
    toast.success(
      quantity > 0 ? `Added ${product.name} to cart` : `Updated ${product.name} quantity`
    );
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
    toast.success('Item removed from cart');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR' });
    toast.success('Cart cleared');
  };
  const isInCart = (productId: string) => cart.items.some((item) => item.id === productId);

  const getItemQuantity = (productId: string) =>
    cart.items.find((i) => i.id === productId)?.quantity ?? 0;

  return (
    <CartContext
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isInCart,
        getItemQuantity
      }}
    >
      {children}
    </CartContext>
  );
}

export function useCart(): CartContextType {
  const context = use(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
