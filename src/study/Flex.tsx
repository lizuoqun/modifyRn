import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Flex extends Component {
  render() {
    return (
      <View>
        <Text> 主轴方向 </Text>
        <View style={styles.box}>
          <Text>张三</Text>
          <Text>李四</Text>
          <Text>王五</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
  },
});
