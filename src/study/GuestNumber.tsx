import {Alert, Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React from 'react';

let number: number;
let count: number = 0;
const GuestNumber = () => {

  const [text, changeText] = React.useState('');

  // 组件渲染完成后，初始化Number
  React.useEffect(() => {
    initNumber();
  }, []);

  const initNumber = () => {
    number = Math.round(Math.random() * 100);
    count = 0;
    console.log('初始化Number--', number);
  };

  const doGuest = () => {
    count++;
    if (number > Number(text)) {
      Alert.alert('你输入的数字太小了');
    } else if (number < Number(text)) {
      Alert.alert('你输入的数字太大了');
    } else {
      Alert.alert(`猜对了，这个数就是${number}, 你总共猜了${count}次`);
    }
  };

  return <SafeAreaView>
    <TextInput style={styles.input} value={text} onChangeText={changeText} keyboardType={'numeric'}/>
    <Button
      onPress={doGuest}
      title="Please Guest"
      color="#841584"
    />
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    margin: 10,
  },
});

export default GuestNumber;
