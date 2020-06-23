import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, Text, View, SectionList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProducts} from '../../actions';
import ProductRow from './components/ProductRow';
import groupBy from 'lodash/groupBy';

const ProductList = ({navigation}) => {

    const [data, setData] = useState([]);

    const dispatch = useDispatch();
    const productSelector = useSelector((state) => state.product.productsList);
    const CallGetProducts = useCallback(() => dispatch(getAllProducts()), [ dispatch]);

    useEffect(() => {
        CallGetProducts();
    }, []);

    useEffect(() => {

        if (productSelector.data.length > 0) {

            const grouped = groupBy(productSelector.data, function(product) {
                return product.type;
            });

            const sections = Object.keys(grouped).map(function(key) {
                return {
                    title: key,
                    data: grouped[key]
                }
            });

            setData(sections);
        }

    }, [productSelector]);

    return (
        <View style={styles.root}>
            <SectionList
                sections={data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <ProductRow item={item} navigation={navigation}/> }
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={productSelector.isLoading}
                        onRefresh={CallGetProducts} />
                }
            />
        </View>
    )
};

const styles = StyleSheet.create({

    root: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff",
        marginLeft: 20
    }
});

export default ProductList;
