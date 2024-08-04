import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ProductsStackNav from './ProductStack'
import OrdersScreen from '../screens/OrdersScreen'

const Drawer = createDrawerNavigator()

const RootNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ProductStack"
        component={ProductsStackNav}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersScreen}
      />
    </Drawer.Navigator>
  )
}

export default RootNavigator