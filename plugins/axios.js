export default function ({ $axios }) {
  $axios.onRequest((config) => {
    console.log()
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    console.log(`Axios error has occured with status ${error.response.status} on url ${error.response.config.url}`)
    console.log(error.response.data)
  })
}
