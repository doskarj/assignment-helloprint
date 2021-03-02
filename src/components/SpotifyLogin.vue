<template>
  <a class="btn btn--loginApp-link" :href="authUrl">
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

<style scoped></style>
