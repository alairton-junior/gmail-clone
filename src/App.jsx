import { useState } from "react"
import Header from "./components/Header"
import MenuLateral from './components/SideBar/Menu/MenuLateral'
import ComposeLateral from './components/SideBar/Compose/ComposeLateral'
import 'tailwindcss/tailwind.css';
import ContentMain from "./components/ContentMain";
import SidebarRight from "./components/SidebarRight";


function App() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="App">
        <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <div className="flex">
          <div>
            <ComposeLateral toggleMenu={toggleMenu} />
            <MenuLateral toggleMenu={toggleMenu} />
          </div>
          <div className="flex w-full">
            <div className="flex-grow w-full">
              <ContentMain />
            </div>
            <div className="w-[67px]">
              <SidebarRight />
            </div>
          </div>            
        </div>      
    </div>
  )
}

export default App
