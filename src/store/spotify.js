import { ref, reactive } from 'vue'
import api from '@/api'

const accessToken = ref('')
const getAccessToken = () => {
  const hash = api.getAccessToken()
  accessToken.value = hash.access_token
}

const spotifyData = reactive({})
const getCurrentlyPlaying = async () => {
  const data = await api.getCurrentlyPlaying(accessToken.value)

  spotifyData.item = data.item
  spotifyData.is_playing = data.is_playing
  spotifyData.progress_ms = data.progress_ms
}

export default {
  accessToken,
  getAccessToken,

  spotifyData,
  getCurrentlyPlaying
}
