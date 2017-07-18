import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './Listitem'

class LibraryList extends Component {
  componentWillMount () {
    const ds = new ListView.DataSource({
      rowHasChnaged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.libraries)
  }

  renderRow (library) {
    return <ListItem library={library} />
  }

  render () {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />
  }
}

LibraryList.propTypes = {
  libraries: PropTypes.array
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  }
}

export default connect(mapStateToProps)(LibraryList)
