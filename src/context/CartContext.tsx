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
        removeFromCart,
        addToCart,
        incrementCartItemQuantity,
        decrementCartItemQuantity
    }}>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartContextProvider };