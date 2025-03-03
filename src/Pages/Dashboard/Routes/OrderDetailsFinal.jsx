import React from 'react';
import { useParams } from 'react-router-dom';

import toast from 'react-hot-toast';
import { Helmet } from "react-helmet-async";
import useOrders from '../../../Hook/useOrders';
import useAxiosPublic from '../../../Axios/useAxiosPublic';




const OrderDetailsFinal = () => {
    const [orders, refetch] = useOrders();
    const { status } = useParams();
    
    // Filter orders based on the status from the URL params
    const filteredOrders = orders.filter(order => order.status === status);

    // Check if the status is 'New' and update the title to 'Pending Orders'
    const title = status === 'New' ? 'Pending Orders' : status.charAt(0).toUpperCase() + status.slice(1) + ' Orders';

    const AxiosPublic = useAxiosPublic();

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            // Make the PATCH request to update the status
            const response = await AxiosPublic.patch(`/orders/${orderId}`, { status: newStatus });
     
            // Refetch data to reflect the updated status
            refetch();
    
            // Show success message
            toast.success('Order status updated successfully');
            
            // Log the response data (optional for debugging)
            console.log(response.data);
        } catch (error) {
            // Handle any error that occurs during the request
            console.error('Error updating order status:', error);
            toast.error('Failed to update order status');
        }
    };
    

    return (
        <div className="py-4 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>DigitalNetwork | {title}</title>
            </Helmet>
            <h1 className="text-lg text-center md:text-3xl font-bold text-black">{title}</h1>
            <div className="rounded-lg mt-6 overflow-x-auto">
                {filteredOrders.length > 0 ? (
                    <table className="min-w-full bg-gray-200 text-black rounded-lg">
                        <thead>
                            <tr className="bg-green-300 text-black">
                                <th className="px-4 py-2 border border-gray-500">SL</th>
                                <th className="px-4 py-2 border border-gray-500">Customer Name</th>
                                <th className="px-4 py-2 border border-gray-500">Customer Phone</th>
                                <th className="px-4 py-2 border border-gray-500">Date</th>
                                <th className="px-4 py-2 border border-gray-500">Status</th>
                                <th className="px-4 py-2 border border-gray-500">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((order, index) => (
                                <tr key={order._id} className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} border-gray-700`}>
                                    <td className="px-4 py-2 border border-gray-500">{index + 1}</td>
                                    <td className="px-4 py-2 border border-gray-500">{order.name}</td>
                                    <td className="px-4 py-2 border border-gray-500">{order.phone}</td>
                                    <td className="px-4 py-2 border border-gray-500">{new Date(order.date).toLocaleString()}</td>
                                    <td className="px-4 py-2 border border-gray-500">
                                        <select
                                            className="border border-gray-300 p-1 rounded text-sm bg-gray-700 text-white"
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Approved">Approved</option>
                                            <option value="Canceled">Canceled</option>
                                            <option value="Shipment">Shipment</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-500">{order.totalAmount} Tk</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="bg-white text-black p-4 rounded-lg text-center">
                        <p>No orders found for {title}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderDetailsFinal;
