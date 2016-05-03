import React, {Component} from 'react'

class Broadcast extends Component {
  render () {
    console.log(this.props);
    // broadcast state only have isBroadcasting
    const { isBroadcasting, prevUrl } = this.props.broadcast;

    // these are functions straight on the props
    const { startBroadcast, stopBroadcast } = this.props.actions;

    let button;
    let prev;

    if (isBroadcasting) {
      button = <button onClick={stopBroadcast}>Stop broadcast</button>;
    } else {
      button = <button onClick={startBroadcast}>Start broadcast</button>;
    }

    if (prevUrl) {
      prev = <audio src={prevUrl} controls autoplay></audio>;
    } else {
      prev = '';
    }

    return (
      <div>
        {button}
        <h1>{prevUrl}</h1>
        {prev}
      </div>
    );
  }
}

export default Broadcast;
