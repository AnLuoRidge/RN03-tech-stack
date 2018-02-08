import React, { Component } from 'react'
import { CardSection } from './common'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'

class ListItem extends Component {

  render () {
    const { id, title:rowTitle } = this.props.library
    const {titleStyle} = styles;

    return (
      // use action to save into reducer
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
    <View>
      <CardSection>
        <Text style={titleStyle}>
        {rowTitle}
        </Text>
        {this.renderDescription()}
      </CardSection>
        </View>
      </TouchableWithoutFeedback>
  )
  }

  renderDescription () {
    const { id:selectedId, description } = this.props.library
    if (selectedId === this.props.selectedLibraryId) { // passed-in id === id in reducer
      return (
        <Text>{description}</Text>
      )
    }
  }

}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  return { selectedLibraryId: state.selectedLibraryId }
}

// action -> props -> class
// we use actions to access producers
// action is the function head and producer is the function body.
export default connect(mapStateToProps, actions)(ListItem)