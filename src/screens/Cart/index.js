import React , {useState, useEffect, useCallback}from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, StyleSheet, View} from 'react-native';
import ProductRow from './components/ProductRow';
import {deleteProduct} from '../../actions';
import BottomBtn from '../../components/BottomBtn';

const Cart = ({navigation}) => {

    const dispatch = useDispatch();
    const cartSelector = useSelector((state) => state.cart);

    const [products, setProducts] = useState(cartSelector.products);
    const [cartEmpty, setCartEmpty] = useState(products.length === 0);
    const [totalPrice, setTotalPrice] = useState(0);

    const CallDeleteProduct = useCallback((product) => dispatch(deleteProduct(product)), [dispatch]);

    useEffect(() => {
        setProducts(cartSelector.products);
        setCartEmpty(cartSelector.products.length === 0);
        setTotalPrice(cartSelector.products.reduce((prev, next) => {
            return prev + next.price;
        }, 0))

    }, [cartSelector]);

    const onDeleteProduct = (item) => {
        CallDeleteProduct(item);
    };

    const handleConfirm = () => {
        navigation.navigate('Checkout');
    };

    return (
        <View style={styles.root}>
            <FlatList
                data={products}
                renderItem={({item}) => <ProductRow item={item} onDelete={onDeleteProduct}/>}
                keyExtractor={(item, index) => item + index}
            />

            <BottomBtn
                disabled={cartEmpty}
                onPress={handleConfirm}
                title={cartEmpty ? 'No tienes productos' : 'Confirmar Pedido'}
                subtitle={`Total: ${totalPrice}`}/>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
});

export default Cart;
