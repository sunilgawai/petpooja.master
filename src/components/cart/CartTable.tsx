import { useEffect, useState } from "react";
import { useCartContext } from "../../context";
import { ICartItem } from "../../types";

const CartTable = () => {
    const {
        cartTables,
        activeTable,
        removeFromCart,
        incrementCartItemQuantity,
        decrementCartItemQuantity
    } = useCartContext();
    const [items, setItems] = useState<ICartItem[] | null>(null);

    const get_active_products = () => {
        const _Active = cartTables.find(table => {
            return table.id === activeTable.id;
        })
        if (!_Active) {
            setItems([])
            return;
        }
        setItems(_Active?.Cart?.Cart_items)
    }

    useEffect(() => {
        get_active_products();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTable, cartTables])


    return (
        <div className="table-item-total">
            <div className="table-rasponsibe">
                <table className="table border table-bordered">
                    <thead className="">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Item</th>
                            <th scope="col">QTY.</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items?.map((item, idx) => (<tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{item.name}</td>
                                {/* <td>{item.quantity}</td> */}

                                <td className="d-flex">
                                    <button
                                        onClick={() => decrementCartItemQuantity(item.itemmaster_id)}
                                        className="btn mx-5">-</button>
                                    {item.quantity}
                                    <button
                                        onClick={() => incrementCartItemQuantity(item.itemmaster_id)}
                                        className="btn mx-5">+</button>
                                </td>

                                <td>{item.product_price}</td>

                                <td>

                                    <button
                                        onClick={() => removeFromCart(item.itemmaster_id)}
                                        className="btn">Remove</button>
                                </td>
                            </tr>))
                        }
                        {  // if no item in cart.
                            !items?.length && <tr>
                                {/* <div className="no-item"> */}
                                <td colSpan={4}>
                                    <h6>No Item Selected</h6>
                                    <p>Please Select Item From Left Menu Item </p>
                                </td>
                                {/* </div> */}
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartTable;