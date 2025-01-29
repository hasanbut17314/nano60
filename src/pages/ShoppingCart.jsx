import React, { useState, useEffect } from 'react';
import hero from "/hero.png"

const ShoppingCart = () => {
    const [quantity, setQuantity] = useState(2);
    const [subtotal, setSubtotal] = useState(119.90);
    const basePrice = 59.95;

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    useEffect(() => {
        setSubtotal(Number((basePrice * quantity).toFixed(2)));
    }, [quantity]);

    return (
        <div className="bg-purple-50 md:px-8 sm:px-5 px-3 py-5">
            {/* Cart Container */}
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-4 md:p-6">
                {/* Header Row - Hidden on mobile */}
                <div className="hidden md:grid md:grid-cols-4 gap-4 pb-4 border-b">
                    <div className="text-sm font-medium">Product</div>
                    <div className="text-sm font-medium text-right">Price</div>
                    <div className="text-sm font-medium text-center">Quantity</div>
                    <div className="text-sm font-medium text-right">Subtotal</div>
                </div>

                {/* Product Row */}
                <div className="flex flex-col md:grid md:grid-cols-4 gap-4 py-4 items-center">
                    {/* Product Info */}
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <img
                            src={hero}
                            alt="Product"
                            className="w-12 h-12 object-cover rounded"
                        />
                        <span className="text-sm font-medium flex-1 md:flex-none">
                            Mu-60 Nanoparticle Detox and Metabolic Repair
                        </span>
                    </div>

                    {/* Price - Mobile Layout */}
                    <div className="flex justify-between md:block w-full md:w-auto">
                        <div className="text-sm font-medium md:hidden">Price:</div>
                        <div className="md:text-right">${basePrice}</div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex justify-between md:justify-center items-center w-full md:w-auto">
                        <div className="text-sm font-medium md:hidden">Quantity:</div>
                        <div className="flex items-center">
                            <button
                                onClick={handleDecrement}
                                className="w-8 h-8 flex items-center justify-center border rounded-l hover:bg-gray-100"
                            >
                                -
                            </button>
                            <div className="w-12 h-8 flex items-center justify-center border-t border-b">
                                {quantity}
                            </div>
                            <button
                                onClick={handleIncrement}
                                className="w-8 h-8 flex items-center justify-center border rounded-r hover:bg-gray-100"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Subtotal - Mobile Layout */}
                    <div className="flex justify-between md:block w-full md:w-auto">
                        <div className="text-sm font-medium md:hidden">Subtotal:</div>
                        <div className="md:text-right">${subtotal}</div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6 pt-6 border-t">
                    {/* Coupon Section */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="coupon code"
                            className="px-4 py-2 border rounded bg-gray-100 text-sm w-full sm:w-auto"
                        />
                        <button className="px-6 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 w-full sm:w-auto">
                            Apply coupon
                        </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        <button className="px-6 py-2 bg-black text-white rounded text-sm hover:bg-gray-800 w-full sm:w-auto">
                            Buy with G pay
                        </button>
                        <button className="px-6 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600 w-full sm:w-auto">
                            checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;