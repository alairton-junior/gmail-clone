import { useState } from "react"
import Header from "./components/Header"
import MenuLateral from './components/SideBar/Menu/MenuLateral'
import ComposeLateral from './components/SideBar/Compose/ComposeLateral'
import 'tailwindcss/tailwind.css';
import ContentMain from "./components/ContentMain";


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
            <ContentMain/>
        </div>
    </div>
);
}

export default App
