import type { NextPage } from 'next'
// Avoid importing from '@undecaf/zbar-wasm'
const { scanImageData } = require('@undecaf/zbar-wasm')

const Home: NextPage = () => {
  const scan = (image: ImageData) => {
    return scanImageData(image)
  }
  return (
    <div>Hello!</div>
  )
}

export default Home
