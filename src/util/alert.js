import {Alert} from 'react-native';

export const showAlertError = (message) => {
    Alert.alert(
        "Error",
        message,
        [
            { text: "Aceptar"}
        ],
        { cancelable: true }
    );
};
