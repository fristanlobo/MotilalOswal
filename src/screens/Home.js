//rnfcs

import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddTransactions from './AddTransactions';
import DisplayTransactions from './DisplayTransactions';

const Tab = createBottomTabNavigator();



const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName={AddTransactions}
      screenOptions={{headerShown: false}}
    >
      <Tab.Screen name="Add" component={AddTransactions} />
      <Tab.Screen name="Display" component={DisplayTransactions} />
    </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})