
import React, { useState } from "react";
import "../common/cart.css";
import cart1 from "../Images/cart1.jpg";
import cart2 from "../Images/cart2.jpg";
import cart3 from "../Images/cart3.jpg";




interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Cotton T-Shirt",
      price: 44,
      quantity: 1,
      image: cart1, 
    },
    {
      id: 2,
      name: "T-Shirt",
      price: 44,
      quantity: 1,
      image:cart2, 
    },
    {
      id: 3,
      name: "Frock",
      price: 44,
      quantity: 1,
      image: cart3, 
    },
  ]);

  const [shipping, setShipping] = useState<number>(5);
  const [discount, setDiscount] = useState<string>("");

  const updateQuantity = (id: number, value: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + value) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal + shipping;

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <div className="cart-left">
          <h2>Shopping Cart</h2>
          <p>{cartItems.length} items</p>

          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                
                <p>{item.name}</p>
              </div>
              <div className="qty-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <p className="price">$ {(item.price * item.quantity).toFixed(2)}</p>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>
                ×
              </button>
            </div>
          ))}

          <a href="/" className="back-link">← Back to Home</a>
        </div>

        <div className="cart-right">
          <h3>Summary</h3>
          <div className="summary-line">
            <span>Items {cartItems.length}</span>
            <span>$ {subtotal.toFixed(2)}</span>
          </div>

          <div className="shipping-section">
            <label>Shipping</label>
            <select value={shipping} onChange={(e) => setShipping(Number(e.target.value))}>
              <option value={5}>Standard-Delivery - $5.00</option>
              <option value={10}>Express-Delivery - $10.00</option>
            </select>
          </div>

          <div className="code-section">
            <label htmlFor="code" >Give Code</label>
            <div className="code-input">
              <input
                type="text"
                id="code"
                placeholder="Enter your code"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
              <button>→</button>
            </div>
          </div>

          <div className="summary-total">
            <span>Total Price</span>
            <span>$ {total.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
