import React from 'react';
import { Cart, Product } from '../types';

interface CartItemProps {
  cart: Cart;
  productList: Product[];
  handleChangeQuantity: (id: string, change: number) => void;
}

const CartItem = ({ cart, productList, handleChangeQuantity }: CartItemProps) => {
  return (
    <div id="cart-items">
      {Object.entries(cart).map(([productId, quantity]) => {
        const product = productList.find((item) => item.id === productId);
        return (
          <div key={productId} className="flex justify-between items-center mb-2">
            <span>
              {product?.name} - {product?.price}원 x {quantity}
            </span>
            <div>
              <button
                className="quantity-change bg-blue-500 text-white px-2 py-1 rounded mr-1"
                onClick={() => handleChangeQuantity(productId, -1)}
              >
                -
              </button>
              <button
                className="quantity-change bg-blue-500 text-white px-2 py-1 rounded mr-1"
                onClick={() => handleChangeQuantity(productId, 1)}
              >
                +
              </button>
              <button
                className="remove-item bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleChangeQuantity(productId, -1 * quantity)}
              >
                삭제
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
