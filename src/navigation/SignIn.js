import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import ProductList from '../screens/ProductList';
import ProductDetail from '../screens/ProductDetail';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import CartBtn from '../components/CartBtn';

const SignInNavigator = createStackNavigator({
    ProductList: {
        screen: ProductList,
        navigationOptions: ({ navigation }) => (
            {
                title: '',
                headerRight: () => <CartBtn navigation={navigation}/>
            }
        )
    },
    ProductDetail: {
        screen: ProductDetail,
        navigationOptions: ({ navigation }) => (
            {
                title: '',
                headerRight: () => <CartBtn navigation={navigation}/>
            }
        )
    },
    Cart: {
        screen: Cart,
        navigationOptions: {
            title: '',
        }
    },
    Checkout: {
        screen: Checkout,
        navigationOptions: {
            title: '',
        }
    },
}, {
    initialRouteName: 'ProductList',
    defaultNavigationOptions: {
        headerTintColor: 'black',
        headerBackTitleVisible: false,
    },
});

export default SignInNavigator;
