<template>
  <h1>assignment-helloprint</h1>

  <Suspense v-if="accessToken">
    <template #default>
      <SpotifyPlayer />
    </template>
    <template #fallback>
      Loading ...
    </template>
  </Suspense>

  <SpotifyLogin v-else />
</template>

<script>
import spotifyStore from '@/store/spotify'
import SpotifyLogin from '@/components/SpotifyLogin'
import SpotifyPlayer from '@/components/SpotifyPlayer'

export default {
  name: 'App',
  components: {
    SpotifyLogin,
    SpotifyPlayer
  },

  mounted() {
    spotifyStore.getAccessToken()
  },

  setup() {
    return {
      accessToken: spotifyStore.accessToken
    }
  }
}
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;

  height: 100%;
  width: 100%;

  font-family: 'Arial', cursive;
}

h1 {
  margin: 1rem;
}
</style>
