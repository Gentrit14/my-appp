import { create } from 'zustand';
import { persist } from "zustand/middleware";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartStore {
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      products: [],
      addToCart: (product) => {
        const existing = get().products.find((p) => p.id === product.id);
        if (existing) {
          set({
            products: get().products.map((p) =>
              p.id === product.id
                ? { ...p, quantity: p.quantity + 1 }
                : p
            ),
          });
        } else {
          set({ products: [...get().products, { ...product, quantity: 1 }] });
        }
      },
      removeFromCart: (id) =>
        set({ products: get().products.filter((p) => p.id !== id) }),
      clearCart: () => set({ products: [] }),
      totalItems: () =>
        get().products.reduce((sum, p) => sum + p.quantity, 0),
      totalPrice: () =>
  get().products.reduce((sum, p) => sum + p.quantity * p.price, 0),
    }),
    {
      name: "cart-storage",
    }
  )
);
