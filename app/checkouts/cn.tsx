import { ScrollView } from "react-native-gesture-handler"
import { View, Text } from "../../components/atoms/Themed"
import { PaymentIntent, useStripe, initStripe, usePaymentSheet, StripeProvider, PresentPaymentSheetResult, PlatformPayButton, } from "@stripe/stripe-react-native"
import { Alert, requireNativeComponent } from "react-native"
import { useEffect, useState } from "react"
import Button from "../../components/atoms/Button"
import { ColorSpace } from "react-native-reanimated"


const API_URL = 'https://coral-invented-calculator.glitch.me'

function cn() {

  const { initPaymentSheet, presentPaymentSheet }  = usePaymentSheet();



  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { publishableKey, paymentIntent, customer, ephemeralKey } = await response.json();



  return {
    publishableKey,
    paymentIntent,
    customer,
    ephemeralKey,
  };
};

const initializePaymentSheet = async () => {
  const {
    publishableKey,
    paymentIntent,
    customer,
    ephemeralKey,
  } = await fetchPaymentSheetParams();

  const { error } = await initPaymentSheet({
    merchantDisplayName: "Example, Inc.",
    customerId: customer,
    customerEphemeralKeySecret: ephemeralKey,
    paymentIntentClientSecret: paymentIntent,
    allowsDelayedPaymentMethods: true,

    // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
    //methods that complete payment after a delay, like SEPA Debit and Sofort.

    // defaultBillingDetails: {
    //   name: 'Jane Doe',
    // },
    googlePay: {
      merchantCountryCode: 'MXN',
      testEnv: true, // use test environment
      currencyCode:'mxn'
    },
  });
  // if (!error) {
  //     Alert.alert('init gone wrong')
  // }
};

const openPaymentSheet = async () => {
  const { error } = await presentPaymentSheet();

  if (error) {
    Alert.alert(`Error code: ${error.code}`, error.message);
  } else {
    Alert.alert('Success', 'Your order is confirmed!');
  }
};

useEffect(() => {
  initializePaymentSheet();
}, []);

return (

  <View>
    <StripeProvider
      publishableKey="pk_test_51OepheBjGSKV5mqcn4h0i5ksQfpBML7hYbBAX0hz4R3TrBGXYkpwBb806sqPjtOBLtY1LCsPl4U8eFN3XA6dD1rv00QxmvVm9j"

    >


      <Button
        title="Checkout"
        onPress={openPaymentSheet}


      />


    </StripeProvider>
  </View>
);
}

export default cn


