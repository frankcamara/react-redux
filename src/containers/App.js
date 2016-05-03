import React, {Component, PropTypes} from 'react'

import {
  version,
  dependencies,
  homepage,
  devDependencies
} from '../../package.json';

import * as broadcastActions from '../actions/broadcast';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import style from './App.css';
import Broadcast from '../components/broadcast';

class App extends Component {

  getVersion () {
    return version;
  }

  render () {
    const actions = {
      startBroadcast: this.props.startBroadcast,
      stopBroadcast: this.props.stopBroadcast,
    };

    return (
      <Broadcast broadcast={this.props.broadcast} actions={actions} />
    );
  }
}

App.propTypes = {
  // Since the broadcast state is an object
  broadcast: PropTypes.object.isRequired,
  startBroadcast: PropTypes.func.isRequired,
  stopBroadcast: PropTypes.func.isRequired,
};

function mapStateToProps({ broadcast }) {
  return { broadcast };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(broadcastActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
