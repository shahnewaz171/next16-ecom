'use client';

import { ShoppingCart as CartIcon, Minus, Plus, Trash2, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useCart } from '@/store/context/CartContext';

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <>
      {/* Cart Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative"
        aria-label="Shopping cart"
      >
        <CartIcon className="h-5 w-5" />
        {cart.totalItems > 0 && (
          <div className="absolute -top-2 -right-2">
            <Badge variant="destructive" size="sm">
              {cart.totalItems}
            </Badge>
          </div>
        )}
      </button>

      {/* Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <button type="button" onClick={() => setIsOpen(false)} className="fixed inset-0 z-50" />

          {/* Drawer Content */}
          <div className="fixed right-0 top-0 h-full w-full max-w-md z-50 ">
            <div className="bg-background border-l shadow-xl flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div>
                  <h2 className="text-2xl font-bold">Shopping Cart</h2>
                  <p className="text-sm text-muted-foreground">
                    {cart.totalItems} {cart.totalItems === 1 ? 'item' : 'items'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-accent rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cart.items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <CartIcon className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                    <p className="text-muted-foreground mb-6">Add some products to get started!</p>
                    <Link href="/products">
                      <Button variant="gradient" onClick={() => setIsOpen(false)}>
                        Browse Products
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.items.map((item) => (
                      <Card key={item.id} className="p-4">
                        <div className="flex gap-4">
                          {/* Image */}
                          <div className="relative w-20 h-20 shrink-0 rounded-md overflow-hidden bg-muted">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </div>

                          {/* Details */}
                          <div className="flex-1 min-w-0">
                            <Link href={`/product/${item.id}`}>
                              <h3 className="font-semibold line-clamp-1 hover:text-primary transition-colors">
                                {item.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-muted-foreground mb-2">
                              ${item.price.toFixed(2)}
                            </p>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-accent rounded transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-accent rounded transition-colors"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                                className="ml-auto p-1 hover:bg-destructive/10 hover:text-destructive rounded transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          {/* Item Total */}
                          <div className="text-right">
                            <p className="font-semibold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}

                    {cart.items.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearCart}
                        className="w-full"
                        icon={<Trash2 className="h-4 w-4" />}
                      >
                        Clear Cart
                      </Button>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cart.items.length > 0 && (
                <div className="border-t p-6 space-y-4">
                  {/* Total */}
                  <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">${cart.totalPrice.toFixed(2)}</span>
                  </div>

                  {/* Checkout Button */}
                  <Button variant="gradient" size="lg" className="w-full">
                    Proceed to Checkout
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
