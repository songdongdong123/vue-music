import * as types from './mutation-types'

const matutaions = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  [types.SET_TEST] (state, test) {
    state.test = test
  },
  [types.SET_PLAYING_STATE] (state, falg) {
    state.playing = falg
  },
  [types.SET_FULL_SCREEN] (state, falg) {
    state.fullScreen = falg
  },
  [types.SET_PLAY_LIST] (state, list) {
    state.playList = list
  },
  [types.SET_SEQUENCE_LIST] (state, list) {
    state.sequenceList = list
  },
  [types.SET_MODE] (state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  }
}

export default matutaions
