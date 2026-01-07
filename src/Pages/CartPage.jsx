import React from 'react'
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart, updateQuantity } from '../Features/cart/cartSlice'

function CartPage() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-gray-50/30">
        <div className="bg-white p-10 rounded-full shadow-sm mb-6">
          <ShoppingBag size={64} className="text-gray-200" />
        </div>
        <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-2">Your Bag is Empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-xs">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          to="/"
          className="flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-700 transition-all active:scale-95"
        >
          <ArrowLeft size={18} /> START SHOPPING
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-12 bg-white">
      
      {/* Title Section */}
      <div className="flex items-center gap-4 mb-10 border-b pb-6">
        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-gray-900">
          My Shopping Bag
        </h2>
        <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {cartItems.length} Items
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

        {/* --- LEFT: CART ITEMS --- */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-6 p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <Link to={`/product/${item.id}`} className="shrink-0 bg-gray-50 rounded-xl p-2 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain mix-blend-multiply"
                />
              </Link>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <Link
                      to={`/product/${item.id}`}
                      className="font-bold text-gray-900 hover:text-orange-600 transition-colors line-clamp-1"
                    >
                      {item.title}
                    </Link>
                    <p className="text-orange-600 font-black text-lg mt-1 tracking-tighter italic">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    className="text-gray-300 hover:text-red-500 transition-colors p-1"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                      className="p-1.5 rounded-md hover:bg-white hover:shadow-sm transition-all"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Math.max(1, item.quantity - 1),
                          })
                        )
                      }
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                    <button
                      className="p-1.5 rounded-md hover:bg-white hover:shadow-sm transition-all"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Subtotal</p>
                    <p className="font-black text-gray-900 tracking-tighter">
                      $ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- RIGHT: ORDER SUMMARY --- */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 text-white p-8 rounded-3xl sticky top-24 shadow-2xl shadow-gray-200">
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-6 border-b border-white/10 pb-4">
              Summary
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm text-gray-400 font-medium">
                <span>Subtotal</span>
                <span className="text-white">${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-400 font-medium">
                <span>Estimated Shipping</span>
                <span className="text-green-400 font-bold uppercase text-[10px] tracking-widest">Free</span>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between items-end">
                <div>
                  <p className="text-xs uppercase font-bold text-gray-400 tracking-widest">Total Amount</p>
                  <p className="text-3xl font-black tracking-tighter italic text-orange-500">
                    ${total.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-orange-500 transition-all shadow-lg active:scale-95 mb-4">
              Secure Checkout
            </button>
            
            <p className="text-[10px] text-center text-gray-500 font-bold uppercase tracking-[0.2em]">
              Complimentary Shipping on all orders
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartPage