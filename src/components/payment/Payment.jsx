import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const Payment = ({ bookingId, totalCost }) => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleToken = async (token) => {
    try {
      const response = await axios.post('/payment', {
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
        amount={totalCost * 100}
        name="Booking Payment"
        billingAddress
        shippingAddress
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
