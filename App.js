import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homescreen'
import DetailsScreen from './screens/detailsscreen' 
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component{
  render(){
  return (
    <Appcontainer/>
  );
}
}

const stacknavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Details: {screen: DetailsScreen} 
},{
  initialRouteName: "Home"
})
const Appcontainer = createAppContainer(stacknavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
