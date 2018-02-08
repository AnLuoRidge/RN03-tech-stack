import React, { Component } from 'react'
import { CardSection } from './common'
import {Text, View, TouchableWithoutFeedback, LayoutAnimation} from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'

class ListItem extends Component {
  componentWillUpdate () {
    LayoutAnimation.spring()
  }
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
      </CardSection>
      {this.renderDescription()}
    </View>
      </TouchableWithoutFeedback>
  )
  }

  renderDescription () {
    const { description } = this.props.library

    if (this.props.isExpanded) { // passed-in id === id in reducer
      return (
        <Text style={styles.descriptionStyle}>{description}</Text>
      )
    }
  }

}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight:15
  }
}

const mapStateToProps = (state, mappedProps) => {
  const isExpanded = state.selectedLibraryId === mappedProps.library.id
  return {isExpanded}
  // return { selectedLibraryId: state.selectedLibraryId }
}

// action -> props -> class
// we use actions to access producers
// action is the function head and producer is the function body.
export default connect(mapStateToProps, actions)(ListItem)