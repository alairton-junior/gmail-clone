import { useState } from "react"
import Header from "./components/Header"

function App() {
  const [toggleMenu, setToggleMenu] = useState(false)
  console.log(toggleMenu)

  return (
    <>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </>
  )
}

export default App
