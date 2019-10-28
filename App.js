import Add from './src/Add';
import AddSale from './src/AddSale';
import Edit from './src/Edit';
import EditSale from './src/EditSale';
import Home from './src/Home';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const App = createStackNavigator(
  {
    Home: {screen: Home},
    Add: {screen: Add},
    Edit: {screen: Edit},
    EditSale: {screen: EditSale},
    AddSale: {screen: AddSale},
  },
  {initialRouteName: 'Home', headerMode: 'none'},
);

export default createAppContainer(App);
