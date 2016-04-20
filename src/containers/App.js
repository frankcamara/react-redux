import React, {Component, PropTypes} from 'react'

import {
  version,
  dependencies,
  homepage,
  devDependencies
} from '../../package.json'

import * as broadcastActions from '../actions/broadcast'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import style from './App.css'

class App extends Component {

  getVersion () {
    return version
  }

  render () {
    // broadcast state only have isBroadcasting
    const {isBroadcasting, prevUrl} = this.props.broadcast
    // these are functions straight on the props
    const {startBroadcast, stopBroadcast} = this.props

    let button
    let prev

    if (isBroadcasting) {
      button = <button onClick={stopBroadcast}>Stop broadcast</button>
    } else {
      button = <button onClick={startBroadcast}>Start broadcast</button>
    }

    if (prevUrl) {
      prev = <audio src={prevUrl} controls autoplay></audio>
    } else {
      prev = ''
    }

    return (
      <div>
        {button}
        <h1>{prevUrl}</h1>
        {prev}
      </div>
    )
  }
}

App.propTypes = {
  // Since the broadcast state is an object
  broadcast: PropTypes.object.isRequired,
  startBroadcast: PropTypes.func.isRequired,
  stopBroadcast: PropTypes.func.isRequired,
}

function mapStateToProps ({broadcast}) {
  return {broadcast}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(broadcastActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
