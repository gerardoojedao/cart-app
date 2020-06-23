import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from './SignIn';

//In case save session add screens to switch
const root = createAppContainer(
    createSwitchNavigator(
        {
            SignIn
        },
        {
            initialRouteName: 'SignIn',
        },
    ),
);

export default root;
