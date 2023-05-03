import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axiosConfig from "../../axiosConfig/axiosConfig";
import { useParams } from 'react-router-dom';


const Payment = () => {

  const { bookingDetailsStr } = useParams();
  const bookingData = JSON.parse(decodeURIComponent(bookingDetailsStr));
  console.log(bookingDetailsStr)
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleToken = async (token) => {
    try {
      const bookingId = bookingData.bookingId;
      const response = await axiosConfig.post('/payment', {
        bookingId,
        token,
      });
      setPaymentSuccess(response.data.booking);
    } catch (error) {
      setPaymentError(error.response.data.message);
    }
  };

  return (
    <div>
      <StripeCheckout
        token={handleToken}
        stripeKey="pk_test_51N1oJNAB87pT1j76v4i0wDIhdsHyVzCkxlSwF4CcqbFA9MkLuIhHn76EU0GkDcnRPy1SlqmcaC9ztybp0zNste0700MKFBzuRL"
        amount={parseInt(bookingData.bookingCost) * 100}
      />
      {paymentError && <p>Error: {paymentError}</p>}
      {paymentSuccess && (
        <p>
          Payment successful! Your booking ID is {paymentSuccess._id}.
        </p>
      )}
    </div>
  );
};

export default Payment;
