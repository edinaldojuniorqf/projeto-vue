import axios from 'axios'
import config from './consts'

axios.defaults.baseURL = config.baseUrlServer
axios.defaults.withCredentials = true
axios.defaults.timeout = 6000
