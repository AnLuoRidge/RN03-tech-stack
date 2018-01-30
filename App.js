import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Text, View } from 'react-native';
import reducers from './src/reducers'
export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
