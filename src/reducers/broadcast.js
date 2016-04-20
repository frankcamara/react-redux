import * as constants from '../constants/actionTypes'
const initialState = {
  isBroadcasting: false,
  prevUrl: '',
}

export default function broadcastReducer(state = initialState, action) {
  switch (action.type) {
    case constants.START_BROADCAST: {
      return {
        ...state,
        isBroadcasting: true,
        prevUrl: action.prevUrl,
      }
    }
    case constants.START_BROADCAST_SUCCESS: {
      return {
        ...state,
        isBroadcasting: true,
        prevUrl: action.prevUrl,
      }
    }
    case constants.START_BROADCAST_FAILED: {
      return {
        ...state,
        isBroadcasting: false,
        prevUrl: action.prevUrl,
      }
    }
    case constants.STOP_BROADCAST: {
      return {
        ...state,
        isBroadcasting: false,
        prevUrl: action.prevUrl,
      }
    }
    default: {
      return state
    }
  }
}
