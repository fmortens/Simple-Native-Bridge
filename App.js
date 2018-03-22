import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {NativeModules} from 'react-native';

const MessageManager = NativeModules.MessageManager;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateMessage = this.updateMessage.bind(this);
  }

  componentWillMount() {
    this.exportedConstants = MessageManager.someKey;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.exportedConstants}</Text>
        <Button title="Log time" onPress={this.updateMessage} />
      </View>
    );
  }

  updateMessage() {
    MessageManager.updateMessage(
      new Date().toTimeString()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
