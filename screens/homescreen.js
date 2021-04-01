import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import {ListItem} from 'react-native-elements'
import axios from 'axios'

export default class HomeScreen extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
            listData: [],
            url: "http://127.0.0.1:5000/"
        }
    }
    getPlanets = () =>{
        const {url} = this.state
        axios.get(url).then(responce =>{
            return(
                this.setState({listData: responce.data.data})
            )
        })
        .catch(error =>{
            alert(error.message)
        })
    }
    componentDidMount(){
        this.getPlanets()
    }
    
    keyExtractor = (item, index) => index.toString()
  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={"planet: ${item.name}"}
        subtitle={"distance from earth: ${item.distance_from_earth}"}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        bottomDivider
        chevron
        onPress= {() =>{
            this.props.navigation.navigate("Details", {planet_name: item.name})
        }}
      />
    )
  }

  render(){
  return (
    <View style={{flex:1}}>
        <View style={{flex:1}}>
          {
            this.state.listData.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>Loading</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.listData}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});