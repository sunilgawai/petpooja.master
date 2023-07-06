import { FC, useEffect, useState } from "react";
import { useCartContext } from "../../context";
import Tables from "./Tables";
import CartTable from "./CartTable";
import { IOrderForm, ITable } from "../../types";
import CustomerDetails from "../delivery/CustomerDetails";
import { Link } from "react-router-dom";

const Cart: FC = () => {
    const { activeTable, cartTables } = useCartContext();
    const [selectedTable, setSelectedTable] = useState<ITable>({} as ITable);
    const [cart_total, set_Cart_Total] = useState<number>(0);
    const [open, setOpen] = useState(false); // For Cart Controller Bottom.
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
        console.log('order values', orderForm)
        setOrderForm({
            ...orderForm,
            payment_status: 'paid'
        })
        fetch('http://localhost:4000/api/order', {
            // Post request.
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderForm)
        }).then((response) => {
            if (response.status === 501) {
                alert("couldn't place order.")
            }
            return response.json();
        })
            .then((order) => {
                fetch(`http://localhost:4000/api/cart/:${activeTable.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                    .then(res => console.log(res));
                console.log(order);
                alert("Order created successfully.");
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const getTotal = () => {
        if (!activeTable || !activeTable.Cart || !activeTable.Cart.total_price) {
            return 0;
        }
        return activeTable.Cart.total_price
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
                            src="/public/img/dine-icon02.png" alt="" />
                    </li>
                    <li><img src="/public/img/dine-icon03.png" alt="" /></li>
                    <li><img src="/public/img/dine-icon04.png" alt="" /></li>
                </ul>
                <div className="dine-button"><Link to="#" className="btn">Dine In</Link></div>
            </div>

            {/* this will receive a table. */}
            <CustomerDetails handleOrderForm={handleOrderForm} />
            <CartTable />

            <div onClick={() => setOpen(!open)} className={`${open ? 'open' : ''} bottom-select-menu`}>
                <div className="menu-total">
                    <Link to="#" className="btn">Spit</Link>
                    <div className="total-text">Total <span>{cart_total}</span></div>
                </div>

                <div className="menu-radio">
                    <label className="radio">
                        <input type="radio"
                            id="CASH"
                            name="payment_method"
                            value="CASH"
                            onChange={handleOrderForm}
                        />
                        <span>Cash</span>
                    </label>

                    <label className="radio">
                        <input type="radio"
                            id="CARD"
                            name="payment_method"
                            value="CARD"
                            onChange={handleOrderForm}
                        />
                        <span>Card</span>
                    </label>
                    <label className="radio">
                        <input type="radio"
                            id="DUE"
                            name="payment_method"
                            onChange={handleOrderForm}
                            value="DUE"
                        />
                        <span>Due</span>
                    </label>

                    <label className="radio">
                        <input type="radio"
                            id="OTHER"
                            name="payment_method"
                            onChange={handleOrderForm}
                            value="OTHER"
                        />
                        <span>Other</span>
                    </label>
                    <label className="radio">
                        <input type="radio"
                            id="PART"
                            name="payment_method"
                            value="PART"
                            onChange={handleOrderForm}
                        />
                        <span>Part</span>
                    </label>
                </div>

                <div className="menu-check-box">
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            id="payment_status"
                            name="payment_status"
                            value="1" // 1 as true
                            onChange={(e) => {
                                handleOrderForm(e);
                                handleOrderPlace();
                            }}
                        />
                        <span>It's Paid</span>
                    </label>
                </div>

                <div className="menu-button">
                    <a href="#" className="btn gray-color mx-2">Save Print</a>
                    <a href="#" className="btn gray-color mx-2">Save &eBill</a>
                    <a
                        href="#"
                        onClick={() => handleOrderPlace()}
                        className="btn gray-color mx-2">
                        Order Now
                    </a>
                    <a href="#" className="btn gray-color mx-2">KOT & Print </a>
                    <a href="#" className="btn gray-color mx-2">Hold</a>
                </div>
            </div>
        </div >
    )
}

export default Cart;

