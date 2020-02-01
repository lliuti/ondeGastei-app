import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main/index';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main
  //   Main: {
  //     screen: Main,
  //     navigationOptions: {
  //       title: 'Controle seus gastos',
  //       headerTitleStyle: {
  //         fontSize: 28,
  //       },
  //     },
  //   },
  // },
  // {
  //   defaultNavigationOptions: {
  //     headerTintColor: '#333',
  //     headerStyle: {
  //       backgroundColor: '#7f7',
  //       elevation: 10,
  //     },
  //     headerTitleAlign: 'center',
  //   },
  }),
);

export default Routes;