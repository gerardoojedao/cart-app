import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const ProductRow = (props) => {

    const {item, onDelete} = props;

    return (
        <View style={styles.item}>
            <View style={styles.containerRow}>
                <View style={styles.containerColumn}>
                    <Text style={styles.itemTitle}>{item.name}</Text>
                    <Text>{`${item.amiiboSeries} - ${item.gameSeries} - ${item.character} - ${item.name} - ${item.type}`}</Text>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                </View>

                <Image style={styles.imageItem} source={{uri: item.image}}/>
                <TouchableOpacity
                    underlayColor='black'
                    style={styles.actionBtn}
                    onPress={() => onDelete(item)}
                >
                    <Image style={styles.imgTrash} source={{uri:'https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/33-512.png'}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

ProductRow.propTypes = {
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
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
    },
    imgTrash: {
        width:30,
        height: 30
    }
});

export default ProductRow;
