import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAllProducts} from '../../actions';
import BottomBtn from '../../components/BottomBtn';

const Checkout = ({navigation}) => {

    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const [paySelected, setPaySelected] = useState(null);
    const [isValidData, setIsValidData] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch();
    const cartSelector = useSelector((state) => state.cart);
    const CallDeleteAllProduct = useCallback(() => dispatch(deleteAllProducts()), [dispatch]);

    useEffect(() => {
        let pattern = /^(56)(\d{9})$/;
        setIsValidData(name !== '' && address !== '' && pattern.test(phone) && paySelected);
    }, [name, address, phone, paySelected]);

    useEffect(() => {
        setTotalPrice(cartSelector.products.reduce((prev, next) => {
            return prev + next.price;
        }, 0))

    }, [cartSelector]);

    const confirmCheckout = () => {
        Alert.alert(
            "Confirmación de pedido",
            "Estás Seguro que deseas confirmar tu pedido?",
            [
                {text: "Cancelar", style: "cancel"},
                { text: "Aceptar", onPress: () => handleConfirm() }
            ],
            { cancelable: false }
        );
    };

    const shipmentConfirmed = () => {
        Alert.alert(
            "Confirmación",
            "Tu pedido se ha generado correctamente, te contactaremos a la brevedad. Muchas gracias!",
            [
                { text: "Aceptar", onPress: () => navigation.navigate('ProductList') }
            ],
            { cancelable: false }
        );
    };

    const handleConfirm = () => {
        CallDeleteAllProduct();
        shipmentConfirmed();
    };

    return (
        <View style={styles.root}>
            <View style={{marginTop: 10}}>
                <Text style={styles.sectionTitle}>
                    Datos Personales
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder={'Nombre'}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setAddress(text)}
                    value={address}
                    placeholder={'Dirección'}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPhone(text)}
                    keyboardType={'number-pad'}
                    value={phone}
                    placeholder={'Teléfono: 56912345678'}
                />
                <View style={{marginTop:10}}>
                    <Text style={styles.sectionTitle}>
                        Medio de Pago
                    </Text>
                    <TouchableOpacity
                        style={[styles.payBtn, paySelected === 'cash' ? styles.selectedBtn : null]}
                        onPress={() => setPaySelected('cash')}
                    >
                        <Text>{'Efectivo'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.payBtn, paySelected === 'card' ? styles.selectedBtn : null]}
                        onPress={() => setPaySelected('card')}
                    >
                        <Text>{'Tarjeta'}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <BottomBtn
                disabled={!isValidData}
                onPress={confirmCheckout}
                title={'Confirmar mi pedido'}
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
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 15,
        marginVertical: 5,
        paddingHorizontal:10
    },
    payBtn: {
        backgroundColor: 'transparent',
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    unselectedBtn: {
        borderColor: 'gray',
        color: 'gray',
    },
    selectedBtn: {
        borderColor: 'green',
        color: 'green'
    },
    sectionTitle: {
        marginLeft: 15,
        fontSize:18
    }
});

export default Checkout;
