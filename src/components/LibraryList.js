import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

class LibraryList extends Component {
render () {
  // console.log("props")
  // console.log(this.props)
  return <View/>
}
}

// get global state and parse it into props
const mapStateToProps = state => {
  // in reducer.js libraries: LibraryReducer // key-value -> this.state
  // console.log("state")
// console.log(state)
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)
