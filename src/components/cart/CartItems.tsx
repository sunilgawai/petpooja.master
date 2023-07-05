import { FC, useEffect, useState } from 'react'
import { ICartItem, ITable } from '../../types'
import { useCartContext } from '../../context'


type CartItemsProps = {
    table: ITable
}
const CartItems: FC<CartItemsProps> = ({ table }) => {
    // const [table, setTable] = useState<ITable>({} as ITable);
    const [items, setItems] = useState<ICartItem[]>([]);
    const { activeTable } = useCartContext();
    console.log(table)


    // if (table.Cart == undefined || table.Cart == null) {
    //     return <tr>
    //         {/* <div className="no-item"> */}
    //         <td colSpan={4}>
    //             <h6>No Item Selected</h6>
    //             <p>Please Select Item From Left Menu Item </p>
    //         </td>
    //         {/* </div> */}
    //     </tr>
    // }

    return (
        <div className="table-item-total">
            <div className="table-rasponsibe">
                <table className="table border table-bordered">
                    <thead className="">
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">code</th>
                            <th scope="col">QTY.</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            table.Cart && <tr>
                                <td>sio</td>
                            </tr>
                        } */}
                        <tr>
                            {/* <div className="no-item"> */}
                            <td colSpan={4}>
                                <h6>No Item Selected</h6>
                                <p>Please Select Item From Left Menu Item </p>
                            </td>
                            {/* </div> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartItems;