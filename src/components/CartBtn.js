import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {useSelector} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

const CartBtn = (props) => {

    const {navigation} = props;
    const cartSelector = useSelector((state) => state.cart);

    return <TouchableOpacity
        style={styles.root}
        onPress={() => navigation.navigate('Cart')}
        disabled={cartSelector.products.length === 0}
        activeOpacity={0.5}
    >
        <Image
            style={[styles.image,{opacity: cartSelector.products.length === 0 ? 0.4 : 1}]}
            source={{uri: 'https://cdn0.iconfinder.com/data/icons/webshop-essentials/100/shopping-cart-512.png'}}/>
        {cartSelector.products.length > 0 && <View style={styles.counter}>
            <Text style={styles.titleCounter}>{cartSelector.products.length}</Text>
        </View>}
    </TouchableOpacity>
};

CartBtn.propTypes = {
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    root: {
        marginRight: 15
    },
    image: {
        width: 32,
        height: 32
    },
    counter: {
        position:'absolute',
        top:0,
        right:0,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleCounter: {
        color: 'white',
        fontSize: 12
    }
});

export default CartBtn;
