import React, { useEffect } from 'react'
import Temp from "./components/weather/temp";
const App = () => {
  useEffect(() => {

    document.title = "Weather App"
  }, [])
  return (
    <>
      <Temp/>
    </>
  )
}

export default App
