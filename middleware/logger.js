export default function ({ route }) {
  const timestamp = new Date(Date.now())
  console.log(`Navigating to ${route.fullPath} on ${timestamp.toDateString()} time ${timestamp.toTimeString()}`)
}
