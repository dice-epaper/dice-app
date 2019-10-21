import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/Home';
import Edit from './src/Edit';

const App = createStackNavigator(
    {
        Home: { screen: Home },
        Edit: { screen: Edit },
    },
    {initialRouteName: 'Home', headerMode: 'none' }
);

export default createAppContainer(App);
