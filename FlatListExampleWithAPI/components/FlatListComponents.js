import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import axios from 'axios';

const url =
  'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=846a7cc4089e4da4aa5561e6526bfd8c';

export default class FlatListComponent extends Component {
  state = {
    contacts: [],
  };
  // componentDidMount: component life cycle da bulunan bir function.
  componentDidMount() {
    this.getContacts();
  }
  // axios ile api get isteğinde bulunuldu.
  getContacts = async () => {
    const response = await axios.get(url);
    if (response.status !== 200) {
      console.log(response.status);
    } else {
      console.log(response.status);
      this.setState({
        contacts: response.data.articles,
      });
      //console.log(this.state.contacts);
    }
  };

  renderContactsItem = ({item, index}) => {
    return (
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={{uri: item.urlToImage}} />
        </View>
        <View style={styles.contacts_container}>
          <Text style={styles.text_name}>{item.title}</Text>
          <Text style={styles.text_description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        renderItem={this.renderContactsItem} // FlatList componenti render edildiğinde listenin içerisine getirilecek yapı.
        keyExtractor={item => item.id} // her bir elemanın id değerini tutmak için.
        data={this.state.contacts} // api'dan gelen datalar.
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingRight: 10,
  },
  contacts_container: {
    justifyContent: 'space-around',
    marginTop: 25,
    marginRight: 120,
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 35,
    marginHorizontal: 10,
  },
  text_name: {
    fontStyle: 'bold',
    color: 'black',
    marginTop: 5,
    fontSize: 18,
  },
  text_description: {
    marginTop: 10,
    fontSize: 15,
    color: 'drakgrey',
  },
});
