import React, { useEffect, useState } from 'react'
import ApiService from '../services/ApiService';
import { IOrder } from '../types';
import { useParams } from 'react-router-dom';

const VewOrder = () => {
    const [order, setOrder] = useState<IOrder>({} as IOrder);
    const { id } = useParams();

    useEffect(() => {
        if (!id) return
        ApiService.viewOrder(parseInt(id)).then(res => {
            setOrder(res.data.data)
            console.log(res.data)
        }).catch(err => console.log(err));
    }, []);

    return (
        <div>
            <table className="table table-striped">
                <thead className='border table-bordered'>
                    <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col">Shop Code</th>
                        <th scope="col">createdAt</th>
                        <th scope="col">customer_first_name</th>
                        <th scope="col">customer_last_name</th>
                        <th scope="col">customer_email</th>
                        <th scope="col">customer_mobile</th>
                        <th scope="col">date_purchased</th>
                        <th scope="col">order_price</th>
                        <th scope="col">order_status</th>
                        <th scope="col">payment_method</th>
                        <th scope="col">payment_status</th>
                        <th scope="col">salesman_id</th>
                        <th scope="col">updatedAt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col">{order.order_id}</th>
                        <td className='text-black'>{order.Shop_Code}</td>
                        <td className='text-black'>{order.createdAt}</td>
                        <td className='text-black'>{order.customer_first_name}</td>
                        <td className='text-black'>{order.customer_last_name}</td>
                        <td className='text-black'>{order.customer_email}</td>
                        <td className='text-black'>{order.customer_mobile}</td>
                        <td className='text-black'>{order.date_purchased}</td>
                        <td className='text-black'>{order.order_price}</td>
                        <td className='text-black'>{order.order_status}</td>
                        <td className='text-black'>{order.payment_method}</td>
                        <td className='text-black'>{order.payment_status}</td>
                        <td className='text-black'>{order.salesman_id}</td>
                        <td className='text-black'>{order.updatedAt}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default VewOrder;