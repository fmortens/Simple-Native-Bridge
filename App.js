import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar
} from 'react-native';
import {NativeModules} from 'react-native';

const MessageManager = NativeModules.MessageManager;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateMessage = this.updateMessage.bind(this);

    this.state = {
      statusBarStyle: 'light-content'
    }
  }

  componentWillMount() {
    this.exportedConstants = MessageManager.someKey;
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={this.state.statusBarStyle}
        />
        <Text>{this.exportedConstants}</Text>
        <Button title="Log time" onPress={this.updateMessage} />
      </View>
    );
  }

  updateMessage() {
    MessageManager.updateMessage(
      new Date().toTimeString()
    );

    this.setState({
      statusBarStyle: this.state.statusBarStyle === 'dark-content' ? 'light-content' : 'dark-content'
    });
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
