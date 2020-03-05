import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const ListItem = props => {

    return(
      <View style={styles.list} >
        <TouchableOpacity activeOpacity={0.6} onPress={() => props.goToDetail(props.id)} >
          <View style={styles.listItem}>
            <Text style={{fontSize: 18}}>{props.title}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={() => props.onRemove(props.id)}  >
          <View style={styles.removeItem} >
            <Text style={styles.removeText} >REMOVE</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({

  list: {
    marginVertical: 5,
  },

  listItem: {
    padding: 10,
    marginVertical: 7,
    //backgroundColor: '#f2f3f5',
    borderBottomWidth: 1,
  },

  removeItem: {
    width: '30%',
    backgroundColor: '#de4b40',
    alignItems: 'center',
  },

  removeText: {
    color: 'white'
  }

})  

export default ListItem;
