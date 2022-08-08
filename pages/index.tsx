import type { NextPage } from 'next'
import { scanImageData } from "@undecaf/zbar-wasm"

const Home: NextPage = () => {
  const scan = (image: ImageData) => {
    return scanImageData(image)
  }
  return (
    <div>Hello!</div>
  )
}

export default Home
