import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class AppInit extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textStyle}>App Init tsx</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
  },
});
