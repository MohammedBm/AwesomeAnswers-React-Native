import React from 'react'
import {StyleSheet, Text, View, Dimensions} from 'react-native'
import { Question } from './src/utls/request'
import QuestionsIndexScreen from './src/components/screens/QuestionsIndexScreen';
import QuestionsNavScreen from './src/components/screens/QuestionsNavScreen'

const {width, height} = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <QuestionsNavScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: width
  }
});
