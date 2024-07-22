import { useState } from "react"
import Header from "./components/Header"
import SidebarRight from "./components/SidebarRight"

function App() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <SidebarRight />
    </>
  )
}

export default App
