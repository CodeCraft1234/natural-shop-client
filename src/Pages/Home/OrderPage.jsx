import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Axios/useAxiosPublic';

const OrderPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryZone, setDeliveryZone] = useState('ঢাকার ভিতরে - BDT80.00');
  const [quantity, setQuantity] = useState(1);
  const [orderNote, setOrderNote] = useState('');
  const [deliveryCharge, setDeliveryCharge] = useState(80);
  const [subTotal, setSubTotal] = useState(0);

  const AxiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const price = 1590;
  const discount = 0;

  const totalAmount = (price * quantity) + deliveryCharge - discount;

  const cartItems = [{
    name: 'মৌন কোর্স (B)',
    price: price.toFixed(2),
    quantity: quantity,
    total: (price * quantity).toFixed(2),
  }];

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to update delivery charge based on delivery zone selection
  const handleDeliveryZoneChange = (e) => {
    const selectedZone = e.target.value;
    setDeliveryZone(selectedZone);
    
    if (selectedZone === 'ঢাকার ভিতরে - BDT50.00') {
      setDeliveryCharge(80);
    } else if (selectedZone === 'ঢাকার বাহিরে - BDT100.00') {
      setDeliveryCharge(100);
    }
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please fill in all required fields.',
      });
      return;
    }

    const orderId = `DN${Math.floor(Math.random() * 1000) + 500}`;
    const englishDate = new Date();

    const orderData = {
      name,
      phone,
      address,
      cartItems,
      deliveryCharge,
      subTotal: price * quantity,
      totalAmount,
      orderId,
      status: "New",
      date: englishDate,
      orderNote,
    };

    AxiosPublic.post('/orders', orderData)
      .then(res => {
        console.log(res.data);
        localStorage.removeItem("cartsss");
        let myOrders = JSON.parse(localStorage.getItem("my_ordersss")) || [];
        myOrders.push(orderData);
        localStorage.setItem("my_ordersss", JSON.stringify(myOrders));

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your order has been successfully placed. Our staff will contact you soon.",
          showConfirmButton: false,
          timer: 4000,
        });

        navigate("/order-success", {
          state: { orderId, totalAmount },
        });
      })
      .catch(err => {
        console.error("Error occurred while placing order:", err);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to place order. Please try again later.",
          showConfirmButton: true,
        });
      });
  };

  return (
    <div className="text-black bg-amber-50 p-5 md:p-10 mt-4">
      <h1 className="text-center text-xl md:text-2xl font-bold text-black mb-6 md:mb-8">
        তাই আর দেরি না করে আজই অর্ডার করুন
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-400">
          <h2 className="text-lg font-semibold mb-4">Order Details</h2>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center mb-4">
              <img 
                src="https://i.ibb.co/3Tph52k/logo1.jpg" 
                alt="product" 
                className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover mr-4"
              />
              <div>
                <p className="font-bold text-black">প্রিমিয়াম MACA ROOT পাউডার 300 গ্রাম</p>
                <p className="text-gray-700">BDT {price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={decreaseQuantity} className="px-3 py-1 border border-gray-400 text-gray-700">-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity} className="px-3 py-1 border border-gray-400 text-gray-700">+</button>
              <span className="ml-auto">BDT {(price * quantity).toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="flex justify-end">
              <span>Delivery Charge:</span> 
              <span> + BDT {deliveryCharge.toFixed(2)}</span>
            </p>
            <p className="flex justify-end">
              <span>Discount:</span> 
              <span> - BDT {discount.toFixed(2)}</span>
            </p>
            <p className="flex justify-end font-bold text-lg mt-2">
              <span className="mr-1">Total: </span> 
              <span>BDT {totalAmount.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-400">
          <h2 className="text-lg font-semibold mb-4">Order Information</h2>
          <form className="space-y-4" onSubmit={handleOrderSubmit}>
            <div>
              <label className="block text-gray-700">আপনার নাম *</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="আপনার নাম" 
                className="w-full p-2 border bg-white border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">আপনার মোবাইল নাম্বার *</label>
              <input 
                type="text" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="আপনার মোবাইল নাম্বার" 
                className="w-full p-2 border bg-white border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">আপনার সম্পূর্ণ ঠিকানা *</label>
              <textarea 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="আপনার সম্পূর্ণ ঠিকানা" 
                className="w-full p-2 border bg-white border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">ডেলিভারি চার্জ *</label>
              <select 
                value={deliveryZone} 
                onChange={handleDeliveryZoneChange}
                className="w-full p-2 border bg-white border-gray-300 rounded"
              >
                <option value="ঢাকার ভিতরে - BDT50.00">ঢাকার ভিতরে - BDT50.00</option>
                <option value="ঢাকার বাহিরে - BDT100.00">ঢাকার বাহিরে - BDT100.00</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">অর্ডার নোট (ঐচ্ছিক)</label>
              <textarea 
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                placeholder="অর্ডার নোট" 
                className="w-full p-2 border bg-white border-gray-300 rounded"
              />
            </div>
            <button type="submit" className="w-full py-2 bg-orange-500 text-white rounded">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
