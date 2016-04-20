import $ from 'jquery'
import * as constants from '../constants/actionTypes'

export function startBroadcast() {
  return dispatch => {
    dispatch({ type: constants.START_BROADCAST, prevUrl: '' })

    let url = "api/v1/tracks/1lDWb6b6ieDQ2xT7ewTC3G"

    $.get(url
    ).done(function (response) {
      if (response) {
        var prevURL = response.preview_url

      }
      dispatch({ type: constants.START_BROADCAST_SUCCESS, prevUrl: prevURL })
    }).fail(function () {
      dispatch({ type: constants.START_BROADCAST_FAILED, prevUrl: '' })
    });
  }
}

export function stopBroadcast() {
  return {
    type: constants.STOP_BROADCAST,
    prevUrl: '',
  }
}
