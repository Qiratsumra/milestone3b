'use client';
import { useState, useEffect } from 'react';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type Product = Omit<CartItem, 'quantity'>;

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://677d41ba4496848554c9c85e.mockapi.io/ecommerce`);
        const data = await response.json();
        setProducts(data); // Update the state with fetched data
      } catch (error) {
        console.error('Product data is not found');
      }
    };
    fetchData();

    // Load cart data from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (item: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      const updatedCart = existingItem
        ? prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...prevCart, { ...item, quantity: 1 }];

      // Save cart to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <div className="bg-white p-4 font-sans">
      <div className="max-w-5xl max-lg:max-w-3xl max-md:max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800">Foody.ko</h2>
        <h2 className="text-3xl font-extrabold text-gray-800">Products List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {products.map((product) => (
            <div key={product.id} className="bg-purple-100 cursor-pointer rounded-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
                />
                <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-pink-500 absolute bottom-0 right-0">
                  Price: ${product.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="px-4 py-2 mt-6 rounded-md text-white text-sm tracking-wider border-none outline-none bg-pink-500 hover:bg-pink-600"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;