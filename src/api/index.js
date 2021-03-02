// TODO: move these to .env files
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const CLIENT_ID = '105b9171638a4b0e8b478756077e6ff1'
const REDIRECT_URI = 'http://localhost:8080'

const scopes = ['user-read-currently-playing', 'user-read-playback-state']
const scopesUri = scopes.join('%20')

const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopesUri}&response_type=token&show_dialog=true`

const getAccessToken = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce(function(initial, item) {
      if (item) {
        var parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
      }
      return initial
    }, {})
}

const getCurrentlyPlaying = async accessToken => {
  const response = await fetch('https://api.spotify.com/v1/me/player', {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`
    })
  })
  const result = await response.json()
  return result
}

export default {
  authUrl,
  getAccessToken,
  getCurrentlyPlaying
}
