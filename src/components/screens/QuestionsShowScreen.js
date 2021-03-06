import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native'
import {Question} from '../../utls/request'

class QuestionsShowScreen extends Component {
  static navigationOptions = {
    title: 'Detail'
  }

  constructor (props) {
    super(props);

    this.state = {
      question: {}
    };
  }

  componentDidMount () {
    const {state} = this.props.navigation;
    Question
      .get(state.params.id)
      .then(question => this.setState({question}))
  }

  render () {
    const {question} = this.state;
    return (
      <View>
        <Text>{question.title}</Text>
        <Text>{question.body}</Text>
      </View>
    );
  }
}

export default QuestionsShowScreen
