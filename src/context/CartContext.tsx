import { createContext, useState, ReactNode, useEffect } from "react";
import { ICartItem, ITable } from "../types";
import ApiService from "../services/ApiService";

interface ICartContextProps {
    cartTables: ITable[]
    setCartTables: React.Dispatch<React.SetStateAction<ITable[]>>
    activeTable: ITable
    setActiveTable: React.Dispatch<React.SetStateAction<ITable>>
    addToCart: (product_id: number, product_price: number, name: string) => void
    incrementCartItemQuantity: (product_id: number) => void
    decrementCartItemQuantity: (product_id: number) => void
    removeFromCart: (id: number) => void
    updateCartPaymentMethod: (payment_method: string) => void
    updateCartPaymentStatus: (payment_status: string) => void
}

const CartContext = createContext<ICartContextProps>({} as ICartContextProps);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cartTables, setCartTables] = useState<ITable[]>([]);
    const [activeTable, setActiveTable] = useState<ITable>({} as ITable);

    useEffect(() => {
        ApiService.getCart().then((response) => {
            setCartTables(response.data);
            setActiveTable(response.data[0])
        }).catch((error) => {
            console.log("Failed to get Tables: ", error);
        })
    }, [])

    useEffect(() => {
        const _active = cartTables.find(table => table.id === activeTable.id);
        if (!_active || !_active.Cart) return;
        console.log("active table", _active)

        // ApiService.setCart(_active).then(res => console.log(res.data)).catch(error => console.log(error))
    }, [cartTables])

    useEffect(() => {
        setActiveTable(cartTables[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addToCart = (product_id: number, product_price: number, name: string) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                let updatedCartItems: ICartItem[] = [];
                let totalPrice = 0;

                if (table.id === activeTable?.id) {
                    let isItemUpdated = false;

                    if (table.Cart?.Cart_items) {
                        updatedCartItems = table.Cart.Cart_items.map((item) => {
                            if (item.itemmaster_id === product_id) {
                                isItemUpdated = true;
                                return {
                                    ...item,
                                    quantity: item.quantity + 1,
                                };
                            }
                            return item;
                        });
                    }

                    if (!isItemUpdated) {
                        updatedCartItems.push({
                            itemmaster_id: product_id,
                            quantity: 1,
                            name: name,
                            product_price: product_price,
                        });
                    }

                    // updatedCartItems.forEach((item) => {
                    //     const itemQuantity = item?.quantity || 0; // Handle undefined or null values
                    //     const itemPrice = item?.product_price || 0; // Handle undefined or null values
                    //     totalPrice += itemQuantity * itemPrice;
                    //     console.log("total", totalPrice);
                    // });

                    updatedCartItems.forEach((item) => {
                        totalPrice += item?.quantity * item?.product_price
                        console.log("total", totalPrice)
                    // });

                    return {
                        ...table,
                        Cart: {
                            ...table.Cart,
                            Cart_items: updatedCartItems,
                            total_price: totalPrice,
                        },
                    };
                }
                return table;
            });
        });
    };

    // to be Checked
    const incrementCartItemQuantity = (product_id: number) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                let updatedCartItems: ICartItem[] = [];
                let totalPrice = 0;

                if (table.id === activeTable?.id) {
                    if (table.Cart?.Cart_items) {
                        updatedCartItems = table.Cart.Cart_items.map((item) => {
                            if (item.itemmaster_id === product_id) {
                                return {
                                    ...item,
                                    quantity: item.quantity + 1,
                                };
                            }
                            return item;
                        });
                    }

                    updatedCartItems.forEach((item) => {
                        totalPrice += (item.quantity || 0) * (item.product_price || 0);
                    });

                    return {
                        ...table,
                        Cart: {
                            ...table.Cart,
                            Cart_items: updatedCartItems,
                            total_price: totalPrice,
                        },
                    };
                }
                return table;
            });
        });
        // setCartTables((prev_tables) => {
        //     return prev_tables.map((table: ITable) => {
        //         if (table.id === activeTable?.id) {
        //             const updatedCartItems = table.Cart?.Cart_items.map((item) => {
        //                 if (item.itemmaster_id === product_id) {
        //                     return {
        //                         ...item,
        //                         quantity: item.quantity + 1,
        //                     };
        //                 }
        //                 return item;
        //             });

        //             const totalPrice = calculateTotalPrice(updatedCartItems);

        //             return {
        //                 ...table,
        //                 Cart: {
        //                     ...table.Cart,
        //                     Cart_items: updatedCartItems,
        //                     total_price: totalPrice,
        //                 },
        //             };
        //         }
        //         return table;
        //     });
        // });
    };

    // decrese the total price & cart item quantity.
    const decrementCartItemQuantity = (product_id: number) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                if (table.id === activeTable?.id) {
                    const updatedCartItems = table.Cart?.Cart_items.map((item) => {
                        if (item.itemmaster_id === product_id && item.quantity > 1) {
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                            };
                        }
                        return item;
                    });

                    const totalPrice = calculateTotalPrice(updatedCartItems);

                    return {
                        ...table,
                        Cart: {
                            ...table.Cart,
                            Cart_items: updatedCartItems,
                            total_price: totalPrice,
                        },
                    };
                }
                return table;
            });
        });
    };

    // This function is being called in other functions.
    const calculateTotalPrice = (cartItems: ICartItem[]): number => {
        let totalPrice: number = 0;
        cartItems.forEach((item: ICartItem) => {
            totalPrice += item.quantity * item.product_price;
        });
        return totalPrice;
    };

    const removeFromCart = (product_id: number) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                if (table.id === activeTable.id) {
                    const updatedCartItems: ICartItem[] = table.Cart?.Cart_items?.filter(
                        (item) => item.itemmaster_id !== product_id
                    );

                    const totalPrice = calculateTotalPrice(updatedCartItems);

                    return {
                        ...table,
                        Cart: {
                            ...table.Cart,
                            Cart_items: updatedCartItems,
                            total_price: totalPrice,
                        },
                    };
                }
                return table;
            });
        });
    };

    const updateCartPaymentMethod = (payment_method: string) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                if (table.id === activeTable.id) {
                    return {
                        ...table,
                        Cart: {
                            ...table.Cart,
                            payment_method: payment_method
                        },
                    };
                }
                return table;
            });
        });
    };

    const updateCartPaymentStatus = (payment_status: string) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                if (table.id === activeTable.id) {
                    return {
                        ...table,
                        Cart: {
                            ...table.Cart,
                            payment_status: payment_status
                        },
                    };
                }
                return table;
            });
        });
    };


    return <CartContext.Provider value={{
        cartTables,
        setCartTables,
        activeTable,
        setActiveTable,
        removeFromCart,
        addToCart,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        updateCartPaymentMethod,
        updateCartPaymentStatus
    }}>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartContextProvider };