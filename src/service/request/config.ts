let BASE_URL = ''
const TIMEOUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'prod'
} else {
  BASE_URL = 'test'
}

export { BASE_URL, TIMEOUT }
