<template>
  <div class="App">
    <div class="main-wrapper">
      <div class="now-playing__img">
        <img :src="spotifyData.item.album.images[0].url" />
      </div>
      <div class="now-playing__side">
        <div class="now-playing__name">{{ spotifyData.item.name }}</div>
        <div class="now-playing__artist">
          {{ spotifyData.item.artists[0].name }}
        </div>
        <div class="now-playing__status">
          {{ spotifyData.is_playing ? 'Playing' : 'Paused' }}
        </div>
        <div class="progress">
          <div class="progress__bar" :style="progressBarStyles" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spotifyStore from '@/store/spotify'

export default {
  name: 'SpotifyButton',

  async setup() {
    await spotifyStore.getCurrentlyPlaying()
    const data = spotifyStore.spotifyData

    const progressBarStyles = {
      width: (data.progress_ms * 100) / data.item.duration_ms + '%'
    }

    return {
      spotifyData: data,
      progressBarStyles
    }
  }
}
</script>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.now-playing__name {
  font-size: 1.5em;
  margin-top: 0.5em;
  margin-bottom: 0.2em;
}
.now-playing__artist {
  margin-bottom: 1em;
}
.now-playing__status {
  margin-bottom: 1em;
}
.now-playing__img {
  float: left;
  margin-right: 10px;
  text-align: right;
  width: 45%;
}
.now-playing__img img {
  max-width: 80vmin;
  width: 100%;
}
.now-playing__side {
  width: 45%;
}
/** Progress **/
.progress {
  border: 1px solid #eee;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
}
.progress__bar {
  background-color: #1db954;
  height: 6px;
}
.background {
  width: 100vw;
  height: 100vh;
}
</style>
