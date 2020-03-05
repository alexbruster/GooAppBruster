import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

const Detail = props => {

  const imageUrl = props.route.params.exhibition[0].images[0].n.url;

  return(
    <ScrollView>
      <View style={styles.detailItem} >
        <Text style={styles.title} >{props.route.params.exhibition[0].title}</Text>
        <Image style={{ width: 200, height: 200 }} source={{uri: imageUrl }} />
        <Text style={styles.description} >{props.route.params.exhibition[0].description}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  detailItem: {
    marginVertical: 7,
    alignItems: 'center',
    padding: 20
  }, 

  title: {
    fontWeight: 'bold', 
    fontSize: 20,
    marginBottom: 10
  },

  description: {
    marginTop: 10,
    textAlign: 'justify'
  }
})

export default Detail;
