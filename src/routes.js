import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main/index';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Controle seus gastos',
        headerTitleStyle: {
          fontSize: 28,
        },
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#333',
      headerStyle: {
        backgroundColor: '#7f7',
        elevation: 10,
      },
      headerTitleAlign: 'center',
    },
  }),
);

export default Routes;