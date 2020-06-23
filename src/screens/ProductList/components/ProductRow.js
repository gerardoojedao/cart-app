import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const ProductRow = (props) => {

    const {item, navigation} = props;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail', {product: item})}
            underlayColor='black'
            key={item.tail}
        >
            <View style={styles.item}>
                <View style={styles.containerRow}>
                    <View style={styles.containerColumn}>
                        <Text style={styles.itemTitle}>{item.name}</Text>
                        <Text>{`${item.amiiboSeries} - ${item.gameSeries} - ${item.character} - ${item.name} - ${item.type}`}</Text>
                        <Text style={styles.itemPrice}>${item.price}</Text>
                    </View>

                    <Image style={styles.imageItem} source={{uri: item.image}}/>
                </View>
            </View>
        </TouchableOpacity>
    )
};

ProductRow.propTypes = {
    item: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray'
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemPrice: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize:17
    },
    imageItem: {
        width: 80,
        height: 100,
        resizeMode: 'contain',
        marginHorizontal:5
    },
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerColumn: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
});

export default ProductRow;
