import { useEffect, useState } from 'react'
import Header from '../components/header/Header';
import { IOrder } from '../types';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);


    useEffect(() => {
        fetch('http://localhost:4000/api/order')
            .then(res => res.json())
            .then(orders => {
                setOrders(orders)
                console.log("Orders", orders);
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <section className="pb-4">
            <Header />
            <div className="bg-white border rounded-1">
                <section className="w-100 p-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Order ID</th>
                                <th scope="col">Shop Code</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Payment Type</th>
                                <th scope="col">Payment Status</th>
                                <th scope="col">Order Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => (
                                    <tr key={order.id}>
                                        <th scope="row">{order.id}</th>
                                        <td>{order.order_id}</td>
                                        <td>{order.Shop_Code}</td>
                                        <td>{order.customer_first_name}</td>
                                        <td>{order.customer_mobile}</td>
                                        <td>{order.payment_method}</td>
                                        <td>{order.payment_status}</td>
                                        <td>
                                            <button className="btn btn-primary">
                                                <Link 
                                                className='text-white'
                                                to={`/orders/${order.id}`}>
                                                    Show
                                                </Link>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </section>
            </div >
        </section >
    )
}

export default Orders;