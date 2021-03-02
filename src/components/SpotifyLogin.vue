<template>
  <a class="sp-button sp-primary" :href="authUrl">
    Login to Spotify
  </a>
</template>

<script>
import api from '@/api'

export default {
  name: 'SpotifyButton',

  setup() {
    return {
      authUrl: api.authUrl
    }
  }
}
</script>

<style scoped>
.sp-button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  user-select: none;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  padding: 16px 48px 18px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border-width: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: normal;
  color: #fff;
  background-color: #1db954;
  min-width: 250px;
}
.sp-button:hover {
  background-color: #1ed760;
}
</style>
