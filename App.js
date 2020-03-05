import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Detail from './components/Detail'
import Home from './components/Home';

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {
    return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' 
                       screenOptions={{ cardStyle:{backgroundColor: '#edeff0'}, headerStyle: {backgroundColor: '#e37659'}, headerTitleAlign: 'center' }} >
        <Stack.Screen name='Exhibitions Guide' component={Home} />
        <Stack.Screen name='Detail' component={Detail} />
      </Stack.Navigator>
     </NavigationContainer>
    );
  }
}
