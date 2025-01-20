import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useOrders from "../../../Hook/useOrders";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../Axios/useAxiosPublic";


const TodayOrders = () => {
    const [orders,refetch] = useOrders();
    const [sortOption, setSortOption] = useState('');
    const [todayOrders, setTodayOrders] = useState([]);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        const filteredOrders = orders.filter(order => order.date.split('T')[0] === today);
        setTodayOrders(filteredOrders);
    }, [orders]);

    const handleCancelOrder = (orderId) => {
        // Logic to cancel the order
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const sortedOrders = [...todayOrders].sort((a, b) => {
        const timeA = new Date(a.date).getTime();
        const timeB = new Date(b.date).getTime();

        if (sortOption === 'date-asc') {
            return timeA - timeB;
        } else if (sortOption === 'date-desc') {
            return timeB - timeA;
        }

        // Default to sorting by the latest time within today
        return timeB - timeA;
    });

    const AxiosPublic=useAxiosPublic()
    const handleStatusChange = async (orderId, newStatus) => {
        try {
            const response = await AxiosPublic.patch(`/orders/${orderId}`, { status: newStatus });
            console.log(response.data);
            refetch();
            toast.success('Order status updated successfully');
        } catch (error) {
            console.error('Error updating order status:', error);
            toast.error('Failed to update order status');
        }
    };

    return (
        <div>
            <div className="container mx-auto py-8 px-4 md:px-8">
                <Helmet>
                    <title>Digital Network | All Orders</title>
                </Helmet>
                <h6 className="ml-12 text-left font-bold text-black text-3xl sm:text-4xl md:text-3xl mb-10">
                    Today's <span className="text-blue-600">Orders</span>
                </h6>

                {sortedOrders.length === 0 ? (
                    <div className="bg-white flex justify-center items-center p-6 min-h-screen rounded-lg text-center">
                        <div>
                            <h1 className="text-base md:text-base font-base mb-5 text-black">No orders available</h1>
                            <Link to="/">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 text-base md:text-base">
                                    Click here to view other products
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedOrders.map((order) => (
                            <div key={order._id} className="border border-blue-400 rounded-lg p-4 md:p-6 lg:p-8 bg-blue-100 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-base md:text-base lg:text-base font-base mb-4 text-black">Order ID: {order.orderId}</h2>
                                    <p className="text-base md:text-base lg:text-base text-black font-base"><strong>Name:</strong> {order.name}</p>
                                    <p className="text-base md:text-base lg:text-base text-black font-base"><strong>Phone:</strong> {order.phone}</p>
                                    <p className="text-base md:text-base lg:text-base text-black font-base"><strong>Address:</strong> {order.address}</p>
                                    <p className="text-base md:text-base lg:text-base text-black font-base"><strong>Order Date:</strong> {order.date.split('T')[0]}</p>
                                    <p className="text-base md:text-base lg:text-base text-black font-base"><strong>Total Amount:</strong> {order.totalAmount} Tk</p>

                                    <h3 className="text-base md:text-base lg:text-base font-base mt-6 mb-4 text-black">Cart Items</h3>
                                    <div className="overflow-x-auto">
                                        <div className="flex flex-col">
                                            {order.cartItems.map(item => (
                                                <div key={item.id} className="flex items-center border border-gray-300 p-2 rounded-md bg-white mb-2">
                                                    <img src={item.image} alt={item.title} className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mr-4 rounded-md" />
                                                    <div className="text-base md:text-base lg:text-base text-black">
                                                        <p className="font-base">{item.title}</p>
                                                        <p>Price: {item.price} Tk</p>
                                                        <p>Quantity: {item.quantity}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5 mt-5 justify-center items-center mt-auto">
                                    <button onClick={() => handleCancelOrder(order._id)} className="bg-red-500 hover:bg-red-600  text-white font-base py-2 px-4  rounded-md text-base md:text-base">
                                        Cancel Order
                                    </button>

                                    <select
                                            className="border rounded-lg border-gray-300 px-5 py-3  text-sm bg-gray-700 text-white"
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
                                        >

                                            <option value="Pending">Pending</option>
                                            <option value="Approved">Approved</option>
                                            <option value="Canceled">Canceled</option>
                                            <option value="Delivered">Delivered</option>

                                        </select>

                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodayOrders;
