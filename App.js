import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Text, View } from 'react-native';
import reducers from './src/reducers'
import {Header} from "./src/components/common";
export default class App extends React.Component {
  render() {
    // console.log(this.state.libraries)
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header>Tech Stack</Header>
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
