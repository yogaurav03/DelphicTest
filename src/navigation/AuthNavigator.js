import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '@/screens';
import {NAVIGATION} from '@/constants';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={NAVIGATION.login}
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={Login} name={NAVIGATION.login} />
    </Stack.Navigator>
  );
}
