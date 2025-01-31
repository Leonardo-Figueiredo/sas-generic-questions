import axios from 'axios'

const api = axios.create({
  baseURL: 'https://opentdb.com/api.php',
  params: {
    amount: 1,
    type: 'multiple',
  },
})

export default api
