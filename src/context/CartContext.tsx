import { createContext, useState, ReactNode, useEffect } from "react";
import { ICartItem, ITable } from "../types";
import ApiService from "../services/ApiService";

interface ICartContextProps {
    cartTables: ITable[]
    setCartTables: React.Dispatch<React.SetStateAction<ITable[]>>
    activeTable: ITable
    setActiveTable: React.Dispatch<React.SetStateAction<ITable>>
    storeCart: (product_id: number, product_price: number, name: string) => void
    addToCart: (product_id: number, product_price: number, name: string) => void
    increaseQty: (id: number) => void
    decreaseQty: (id: number) => void
    increaseQuantity: (product_id: number) => void
    decreaseQuantity: (product_id: number) => void
    removeFromCart: (id: number) => void
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
        setActiveTable(cartTables[0]);
    }, [])

    // Needs to be deleted.
    const increaseQty = (id: number) => {
        // increase the quantity of the items.
        const table = structuredClone(activeTable);
        const cart = table?.Cart;
        if (cart) {
            const index = cart.Cart_items.findIndex((item: ICartItem) => item.itemmaster_id === id);
            if (index !== -1) {
                cart.Cart_items[index].quantity += 1;
            }
            console.log("increase quantity", cart.Cart_items[index]);
        }
        setActiveTable(table);
        // storeToDB(table)
    }
    // Needs to be deleted.
    const decreaseQty = (id: number) => {
        // increase the quantity of the items.
        const table = structuredClone(activeTable);
        const cart = table?.Cart;
        if (cart) {
            const index = cart.Cart_items.findIndex((item: ICartItem) => item.itemmaster_id === id);
            if (index !== -1) {
                if (cart.Cart_items[index].quantity > 1) {
                    cart.Cart_items[index].quantity -= 1;
                }
            }
            console.log("increase quantity", cart.Cart_items[index]);
        }
        setActiveTable(table);
        // storeToDB(table)
    }

    const storeCart = (product_id: number, product_price: number, name: string) => {
        // const _activeTable: ITable = structuredClone(activeTable);
        // // If Table is empty.
        // if (!_activeTable?.Cart) {
        //     _activeTable.Cart = {
        //         Cart_items: [
        //             {
        //                 name: name,
        //                 itemmaster_id: product_id,
        //                 quantity: 1
        //             }
        //         ],
        //         total_price: product_price
        //     }
        // }

        // if (_activeTable?.Cart) {
        //     // Check product in items_list.
        //     const index = _activeTable?.Cart?.Cart_items.findIndex((item: ICartItem) => item.itemmaster_id === product_id);
        //     if (index !== -1) {
        //         _activeTable.Cart.Cart_items[index].quantity += 1;
        //         _activeTable.Cart.total_price += product_price;
        //     } else {
        //         _activeTable.Cart.Cart_items.push({
        //             name: name,
        //             itemmaster_id: product_id,
        //             quantity: 1
        //         });
        //         _activeTable.Cart.total_price += product_price;
        //     }
        // }
        // console.log("_actove", _activeTable)
        // setActiveTable(_activeTable);

        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                let updatedCartItems: ICartItem[] = [];
                if (table.id === activeTable?.id) {
                    // console.log("storing to in table", activeTable?.id)
                    let isItemUpdated = false;
                    if (table.Cart?.Cart_items) {
                        updatedCartItems = table.Cart?.Cart_items?.map((item) => {
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
                            product_price: product_price
                        });
                    }

                    return {
                        ...table,
                        Cart: {
                            ...table.Cart,
                            Cart_items: updatedCartItems,
                            total_price: product_price
                        },
                    };
                }
                return table;
            });
        });

    }

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

                    updatedCartItems.forEach((item) => {
                        totalPrice += item.quantity * item.product_price!
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
    };

    // to be Checked
    const incrementCartItemQuantity = (product_id: number) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                if (table.id === activeTable?.id) {
                    const updatedCartItems = table.Cart?.Cart_items.map((item) => {
                        if (item.itemmaster_id === product_id) {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
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
    // to be Checked
    const decrementCartItemQuantity = (product_id: number) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                if (table.id === activeTable?.id) {
                    const updatedCartItems = table.Cart?.Cart_items.map((item) => {
                        if (item.itemmaster_id === product_id) {
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
    // to be Checked
    const calculateTotalPrice = (cartItems: ICartItem[]): number => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.quantity * item.product_price!
        });
        return totalPrice;
    };



    const increaseQuantity = (product_id: number) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                if (table.id === activeTable.id) {
                    const updatedCartItems: ICartItem[] = table.Cart?.Cart_items?.map((item) => {
                        if (item.itemmaster_id === product_id) {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                            };
                        }
                        return item;
                    });

                    return {
                        ...table,
                        Cart: {
                            ...table.Cart,
                            Cart_items: updatedCartItems,
                        },
                    };
                }
                return table;
            });
        });
    };

    const decreaseQuantity = (product_id: number) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                if (table.id === activeTable.id) {
                    const updatedCartItems: ICartItem[] = table.Cart?.Cart_items?.map((item) => {
                        if (item.itemmaster_id === product_id && item.quantity > 0) {
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                            };
                        }
                        return item;
                    });

                    return {
                        ...table,
                        Cart: {
                            ...table.Cart,
                            Cart_items: updatedCartItems,
                        },
                    };
                }
                return table;
            });
        });
    };

    const removeFromCart = (product_id: number) => {
        setCartTables((prev_tables) => {
            return prev_tables.map((table: ITable) => {
                if (table.id === activeTable.id) {
                    const updatedCartItems: ICartItem[] = table.Cart?.Cart_items?.filter((item) => item.itemmaster_id !== product_id);

                    return {
                        ...table,
                        Cart: {
                            ...table.Cart,
                            Cart_items: updatedCartItems,
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
        increaseQty,
        decreaseQty,
        removeFromCart,
        storeCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity
    }}>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartContextProvider };