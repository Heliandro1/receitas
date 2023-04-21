import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Search from '../pages/Search';

const Stack = createNativeStackNavigator();
export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: 'details',
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Veja o que encontramos',
        }}
      />
    </Stack.Navigator>
  );
}
