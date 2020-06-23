import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const BottomBtn = (props) => {

    const {onPress, title, subtitle, disabled, style} = props;
    return (
        <View style={styles.bottomView}>
            <TouchableOpacity
                underlayColor='black'
                style={[styles.actionBtn, {opacity: disabled ? 0.5 : 1}, style]}
                disabled={disabled}
                onPress={onPress}
            >
                <Text style={styles.titleActionBtn}>{title}</Text>
                {subtitle &&
                subtitle !== "" &&
                <Text style={styles.subtitleActionBtn}>{subtitle}</Text>}
            </TouchableOpacity>
        </View>
    )
};

BottomBtn.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    style: PropTypes.object
};

const styles = StyleSheet.create({
    bottomView: {
        height: 70,
        marginBottom: 0,
    },
    actionBtn: {
        flex:1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleActionBtn: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    },
    subtitleActionBtn: {
        color: 'white',
        fontSize: 16
    }
});

export default BottomBtn;
