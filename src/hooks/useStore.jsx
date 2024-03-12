import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (itemToAdd) =>
        set((state) => {
          const existingItemIndex = state.cart.findIndex(
            (item) => item.id === itemToAdd.id
          );
          if (existingItemIndex > -1) {
            return {
              cart: state.cart.map((item, index) =>
                index === existingItemIndex
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return { cart: [...state.cart, { ...itemToAdd, quantity: 1 }] };
          }
        }),
      removeFromCart: (itemId) =>
        set((state) => ({
          cart: state.cart.reduce((acc, item) => {
            if (item.id === itemId) {
              if (item.quantity > 1) {
                acc.push({ ...item, quantity: item.quantity - 1 });
              }
            } else {
              acc.push(item);
            }
            return acc;
          }, []),
        })),
    }),
    {
      name: "shopping-cart",
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);
          return item ? JSON.parse(item) : undefined;
        },
        setItem: (name, value) =>
          localStorage.setItem(name, JSON.stringify(value)),
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);

export default useStore;
