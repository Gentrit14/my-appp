"use client";

import { useCartStore } from "@/lib/cartStore";
import { X } from "lucide-react";

export default function CartSidebar({ onClose }: { onClose: () => void }) {
  const { products, totalItems, totalPrice, removeFromCart, clearCart } =
    useCartStore();

  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-6 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {products.length === 0 ? (
          <p className="text-gray-500">Cart is empty.</p>
        ) : (
          products.map((p) => (
            <div key={p.id} className="border-b pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-sm text-gray-600">
  Quantity: {p.quantity} × €{p.price.toFixed(2)} = €{(p.quantity * p.price).toFixed(2)}
</p>

                </div>
                <button
                  className="text-red-500 text-sm"
                  onClick={() => removeFromCart(p.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 border-t pt-4">
        <p className="font-semibold">Total: €{totalPrice()}</p>
        <button
          onClick={clearCart}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
