import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, ScrollView, View, Dimensions, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct, deleteProduct} from '../../actions';
import BottomBtn from '../../components/BottomBtn';

const windowWidth = Dimensions.get('window').width;

const ProductDetail = ({navigation}) => {

    const {product} = navigation.state.params;

    const dispatch = useDispatch();
    const cartSelector = useSelector((state) => state.cart);
    const CallAddProduct = useCallback(() => dispatch(addProduct(product)), [product,dispatch]);
    const CallDeleteProduct = useCallback(() => dispatch(deleteProduct(product)), [product,dispatch]);

    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        setIsInCart(cartSelector.products.filter(prod => prod.tail === product.tail).length > 0)
    }, [cartSelector]);

    return (
        <View style={styles.root}>

            <ScrollView>
                <View style={styles.containerImage}>
                    <Image style={styles.image} source={{uri: product.image}}/>
                </View>
                <View style={styles.containerDesc}>
                    <Text style={styles.itemTitle}>{product.name}</Text>
                    <Text style={styles.itemSubtitle}>{`${product.amiiboSeries} - ${product.gameSeries} - ${product.character} - ${product.name} - ${product.type}`}</Text>
                    {Object.keys(product.release).map((key, index) => {
                        return product.release[key] !== 'undefined' && product.release[key] !== null ? <Text style={styles.itemBody} key={index}>{`${key}: ${product.release[key]}`}</Text> : null
                    })}
                </View>

            </ScrollView>

            <BottomBtn
                disabled={false}
                onPress={() => isInCart ? CallDeleteProduct() : CallAddProduct()}
                title={isInCart ? 'Eliminar' : 'Agregar'}
                style={{backgroundColor: isInCart ? 'red' : 'green'}}/>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    containerImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    image: {
        width: windowWidth * 0.5,
        height: windowWidth * 0.5,
        resizeMode: 'contain'
    },
    containerDesc: {
        paddingHorizontal: 15,
    },
    itemTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    itemSubtitle: {
        fontSize: 20,
        marginBottom: 5
    },
    itemBody: {
        fontSize: 18
    },
});

export default ProductDetail;
