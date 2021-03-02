<template>
  <main>
    <h1>Simple Spotify Player</h1>

    <Suspense v-if="accessToken">
      <template #default>
        <SpotifyPlayer />
      </template>
      <template #fallback>
        Loading ...
      </template>
    </Suspense>

    <SpotifyLogin v-else />
  </main>
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

  font-family: 'Helvetica Neue', cursive;
}

main {
  max-width: 500px;
  margin: auto;
  text-align: center;
}

h1 {
  margin: 2rem 0rem;
}
a {
  text-decoration: none;
}
</style>
