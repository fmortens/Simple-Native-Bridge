import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {NativeModules} from 'react-native';

const CalendarManager = NativeModules.CalendarManager;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.addEvent = this.addEvent.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Add event" onPress={this.addEvent} />
      </View>
    );
  }

  addEvent() {
    CalendarManager.addEvent(
      'Birthday Party',
      '4 Privet Drive, Surrey',
      new Date().getTime()
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
