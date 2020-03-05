import * as React from 'react';
import { View, StyleSheet, ScrollView, Button, FlatList } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import axios from 'axios';

import ListItem from './List';

export default class Home extends React.Component {

  state = {
    exhibitions: [],
    showList: false
  }

  static contextType = NavigationContext;

  componentDidMount = async () => {
    const apiCall = await axios.get(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=beb429050631ade0573ebdda534c1c63&exhibition_id=874305559&page=1&per_page=14`)
    const data = apiCall.data.objects;

    this.setState(
      { exhibitions: data }
    )
  }

  showListHandler = () => {
    this.setState({
      showList: !this.state.showList,
    })
  }

  removeItem = id => {
    const exhibitionsList = this.state.exhibitions.filter((item) => {
      return item.id !== id;
    })

    this.setState({
      exhibitions: exhibitionsList
    })
  }

  detailPageHandler = id => {
    const navigation = this.context;
    const exhibitionItem = this.state.exhibitions.filter((exhibition) => {
      return exhibition.id === id;
    })
    navigation.navigate('Detail', {exhibition: exhibitionItem});
  }

  render() {  
    return (
    
        <View style={styles.container}>
          <Button title={!this.state.showList ? 'SHOW EXHIBITIONS' : 'HIDE EXHIBITIONS'} 
                  onPress={this.showListHandler} 
          />
          {this.state.showList ? <FlatList keyExtractor={(item) => item.id}
                                          data={this.state.exhibitions}
                                          renderItem={(exhibition) => <ListItem title={exhibition.item.title}
                                                                                id={exhibition.item.id} 
                                                                                onRemove={this.removeItem}
                                                                                goToDetail={this.detailPageHandler} /> } 
                                 /> : null }   
        </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 20
  }
});