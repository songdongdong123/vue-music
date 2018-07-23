const singer = state => state.singer
const test = state => state.test
const playing = state => state.playing
const fullScreen = state => state.fullScreen
const playList = state => state.playList
const sequenceList = state => state.sequenceList
const mode = state => state.mode
const currentIndex = state => state.currentIndex
const currentSong = (state) => {
  return state.playList[state.currentIndex] || {}
}
export {
    singer,
    test,
    playing,
    fullScreen,
    playList,
    sequenceList,
    mode,
    currentIndex,
    currentSong
}
