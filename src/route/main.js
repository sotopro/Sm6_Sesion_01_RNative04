import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Location from '../scenes/location/index';
import Dashboard from '../scenes/dashboard/index';
import OrderDetail from '../scenes/order-detail/index';
import Home from '../scenes/home/index';
import Products from '../scenes/products/index';
import ProductDetail from '../scenes/product-detail/index';
import Cart from '../scenes/cart/index';
import PaymentMethods from '../scenes/payment-methods/index';
import Checkout from '../scenes/checkout/index';
import SuccessPayment from '../scenes/success-payment/index';
import Settings from '../scenes/settings/index';

const Stack = createNativeStackNavigator();

const MainStackNavigator = props => {
  const forFade = ({current, closing}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: forFade,
      }}>
      <Stack.Screen name="Home" component={Home} options={{title: ''}} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Setings" component={Settings} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={({route}) => ({
          title: route.params.orderName,
        })}
      />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({route}) => ({
          title: route.params.productName,
        })}
      />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen
        name="PaymentMethods"
        component={PaymentMethods}
        options={{title: 'Payment Method'}}
      />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen
        name="SuccessPayment"
        component={SuccessPayment}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
