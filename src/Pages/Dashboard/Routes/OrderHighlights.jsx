import  { useState } from 'react';
import useOrders from '../../../Hook/useOrders';

const OrderHeighlights = () => {
    const [orders, refetch] = useOrders();
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (id) => {
        if (activeDropdown === id) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(id);
        }
    };

    const handleCancelOrder = (orderId) => {
        console.log('Cancel order:', orderId);
    };

    const openOrderDetails = (orderId) => {
        console.log('View details for order:', orderId);
    };

    // Function to determine the delivery zone based on the delivery charge
    const getDeliveryZone = (deliveryCharge) => {
        if (deliveryCharge === 80) {
            return "ঢাকার ভিতরে";
        } else if (deliveryCharge === 60) {
            return "ঢাকার বাহিরে";
        } else {
            return "ঢাকার বাহিরে";
        }
    };

    const sortedOrders = orders
    ?.sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10);
  

    const statusColorMap = {
        Pending: ' text-yellow-800',
        Approved: ' text-green-800',
        Packaging: ' text-blue-800',
        Shipment: ' text-purple-800',
        Delivered: ' text-gray-800',
      };
      
      const getStatusClass = (status) => statusColorMap[status] || 'bg-white text-black';
      
    return (
        <div className='mb-3 '>
            <h1 className="text-xl mt-3 text-black font-bold mb-4">Recent Orders</h1>
            {orders?.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <div className="overflow-x-auto rounded-xl text-sm text-center text-black">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border">Serial Number</th>
                                <th className="px-4 py-2 border">Order ID</th>
                                <th className="px-4 py-2 border">Name</th>
                                <th className="px-4 py-2 border">Phone</th>
                                <th className="px-4 py-2 border">Address</th>
                        
                                <th className="px-4 py-2 border">Prize</th>
                                <th className="px-4 py-2 border">Delivery Zone</th>
                                <th className="px-4 py-2 border">Quantity</th>
                                <th className="px-4 py-2 border">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedOrders?.map((order, index) => (
                                <tr key={order._id}>
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{order.orderId}</td>
                                    <td className="px-4 py-2 border">{order.name}</td>
                                    <td className="px-4 py-2 border">{order.phone}</td>
                                    <td className="px-4 py-2 border">{order.address}</td>
    
                                    <td className="px-4 py-2 border">৳{order.totalAmount}</td>
                                    <td className="px-4 py-2 border">{getDeliveryZone(order.deliveryCharge)}</td>
                                    <td className="px-4 py-2 border">
                                        {order.cartItems.reduce((total, item) => total + item.quantity, 0)}
                                    </td>
                                    <td className={`px-4 py-2 font-bold border ${getStatusClass(order.status)}`}>
                                      {order.status}
                                    </td>
           
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default OrderHeighlights;
