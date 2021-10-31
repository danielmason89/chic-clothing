import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JqPIpBFSjBDsGwUDjoBnqe7QIJFzdfjHg5vvcYGrfy8WK9zjsLD0rq3SVKoztfkcjTby0BopPdPQqD5yMnUS0yW00kJuNNj5L';
    return (
        <StripeCheckout label='Pay Now' name='Chic Clothing LTD.' billingAddress shippingAddress image='https://svgshare.com/i/CUz.svg' description={`Your total is $${price}`} amount={priceForStripe} panelLabel='Pay Now' token={onToken} stripeKey={publishableKey} />
    )
}

export default StripeCheckoutButton;
