import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView } from 'react-native'
import ListItem from './ListItem'

class LibraryList extends Component {
  componentWillMount () {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(this.props.libraries)
  }

  renderRow (library) {
    return (
      <ListItem library={library}/>
    )
  }

  highlightRow (sectionID, rowID) {
    console.log("selected: "+ sectionID + rowID)
  }

render () {
  return <ListView dataSource={this.dataSource}
  renderRow={this.renderRow} // todo: renderRow(lib???)
  highlightRow={this.highlightRow} />
}
}

// get global state and parse it into props
const mapStateToProps = state => {
  // App.js -> Provide store
  // in reducer.js libraries: LibraryReducer // key-value -> this.state
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)
