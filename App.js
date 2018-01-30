import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Text, View } from 'react-native';
import reducers from './src/reducers'
import {Header} from "./src/components/common";
import LibraryList from './src/components/LibraryList'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header>Tech Stack</Header>
          <LibraryList />
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
