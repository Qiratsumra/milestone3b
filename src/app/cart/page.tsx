'use client';
import { useState, useEffect } from 'react';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
 
    <div className="bg-gray-50 p-6 min-h-screen font-sans">
  <div className="max-w-screen-lg mx-auto bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold text-gray-800 p-4 text-center sm:text-left">
      Shopping Cart
    </h2>
    {cart.length === 0 ? (
      <p className="p-4 text-gray-600 text-center">Your cart is empty.</p>
    ) : (
      <div className="overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left">
              <th className="p-4 text-sm sm:text-base">Product</th>
              <th className="p-4 text-sm sm:text-base">Price</th>
              <th className="p-4 text-sm sm:text-base">Quantity</th>
              <th className="p-4 text-sm sm:text-base">Total</th>
              <th className="p-4 text-sm sm:text-base">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4 flex flex-col sm:flex-row items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md mr-0 sm:mr-4"
                  />
                  <div>
                    <p className="font-bold text-gray-800 text-sm sm:text-base">
                      {item.name}
                    </p>
                  </div>
                </td>
                <td className="p-4 text-gray-800 text-sm sm:text-base">
                  ${item.price.toFixed(2)}
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-center sm:justify-start">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center text-gray-600 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="mx-2 text-sm sm:text-base">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center text-gray-600 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-4 text-gray-800 text-sm sm:text-base">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-4 text-red-500 text-xl cursor-pointer">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="hover:text-red-600"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
    {cart.length > 0 && (
      <div className="p-4 text-right">
        <h3 className="text-xl font-bold">
          Total: ${calculateTotal().toFixed(2)}
        </h3>
      </div>
    )}
  </div>
</div>

  );
};

export default Cart;
