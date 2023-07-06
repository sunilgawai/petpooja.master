import CustomerDetails from "../delivery/CustomerDetails";
import { IOrderForm, ITable } from "../../types";
import { FC, useEffect, useState } from "react";
import { useCartContext } from "../../context";
import ApiService from "../../services/ApiService";
import { Link } from "react-router-dom";
import CartTable from "./CartTable";
import Button from "./utils/Button";
import Radio from "./utils/Radio";
import Check from "./utils/Check";
import Tables from "./Tables";

const Cart: FC = () => {
    const { activeTable, cartTables, updateCartPaymentMethod, updateCartPaymentStatus } = useCartContext();
    const [selectedTable, setSelectedTable] = useState<ITable>({} as ITable);
    const [cart_total, set_Cart_Total] = useState<number>(0); // Cart Total Amount.
    const [open, setOpen] = useState(false); // For Cart Controller visiblity.
    const [orderDisabled, setOrderDisabled] = useState(true);
    const [orderForm, setOrderForm] = useState<IOrderForm>({
        shop_code: 'XXX',
        customer_first_name: '',
        customer_last_name: '',
        customer_mobile: '',
        payment_method: '',
        payment_status: '',
        order_price: '69',
        order_items: [],
    });

    useEffect(() => {
        setSelectedTable(activeTable);
        if (!activeTable || !activeTable.Cart || !activeTable.Cart.total_price) return;
        setOrderForm({
            ...orderForm,
            order_items: [...activeTable.Cart.Cart_items]
        })
    }, [activeTable])

    useEffect(() => {
        if (orderForm.customer_first_name.length
            && orderForm.customer_last_name.length
            && orderForm.customer_mobile.length) {
            setOrderDisabled(!orderDisabled);
        }
    }, [orderForm])

    useEffect(() => {
        const get_active_cart_total = () => {
            const _Active = cartTables.find(table => {
                return table.id === activeTable.id;
            })
            if (!_Active) {
                set_Cart_Total(0);
                return;
            }
            set_Cart_Total(_Active?.Cart?.total_price)
        }
        get_active_cart_total();
    }, [cartTables, activeTable])


    const handleOrderForm = (event: any) => {
        const { name, value } = event.target;
        console.log({ name, value })
        setOrderForm({
            ...orderForm,
            [name]: value
        })
    }

    const handleOrderPlace = () => {
        console.log("Active table", selectedTable)
        // ApiService.setCart(activeTable).then(res => console.log(res)).catch(err => console.log(err));
    }

    return (
        <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            {/* Navigation tabs for cart. */}
            <div className="dine-tab">
                <ul>
                    {/* list of cart tables  */}
                    <Tables />
                    {/* <li><img src="/public/img/dine-icon01.png" alt="" /></li> */}
                    <li>
                        <img data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                            src="assets/dine-icon02.png" alt="" />
                    </li>
                    <li><img src="assets/dine-icon03.png" alt="" /></li>
                    <li><img src="assets/dine-icon04.png" alt="" /></li>
                </ul>
                <div className="dine-button"><Link to="#" className="btn">Dine In</Link></div>
            </div>

            {/* this will receive a table. */}
            <CustomerDetails handleOrderForm={handleOrderForm} />
            <CartTable />

            {/* Bottom Cart Controller  */}
            <div onClick={() => setOpen(!open)} className={`${open ? 'open' : ''} bottom-select-menu`}>
                <div className="menu-total">
                    <Button to="#" text="Split" />
                    <div className="total-text">Total <span>{cart_total ?? 0}</span></div>
                </div>

                <div className="menu-radio">
                    <Radio id="CASH" name="payment_method"
                        value="CASH" text="Cash"
                        handleSelect={updateCartPaymentMethod} />
                    <Radio id="CARD" name="payment_method"
                        value="CARD" text="Card"
                        handleSelect={updateCartPaymentMethod} />
                    <Radio id="DUE" name="payment_method"
                        value="DUE" text="Due"
                        handleSelect={updateCartPaymentMethod} />
                    <Radio id="OTHER" name="payment_method"
                        value="OTHER" text="Other"
                        handleSelect={updateCartPaymentMethod} />
                    <Radio id="PART" name="payment_method"
                        value="PART" text="Part"
                        handleSelect={updateCartPaymentMethod} />
                </div>

                <div className="menu-check-box">
                    <Check
                        id="payment_status" name="payment_status"
                        value="0" checked={activeTable?.Cart?.payment_status === '1'} handleCheck={updateCartPaymentStatus} />
                </div>

                <div className="menu-button">
                    <Button to="#" text="Save Print" />
                    <Button to="#" text="Save & eBill" />
                    <Button to="#" text="Order Now"
                        handleClick={handleOrderPlace} />
                    <Button to="#" text="KOT & Print" />
                    <Button to="#" text="Hold" />
                </div>
            </div>
        </div >
    )
}

export default Cart;

