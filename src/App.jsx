import { useState } from "react"
import Header from "./components/Header"
import MenuLateral from './Componets/SideBar/Menu/MenuLateral'
import 'tailwindcss/tailwind.css';


function App() {
  const [toggleMenu, setToggleMenu] = useState(false)
  console.log(toggleMenu)
  return (
    <div>
      <div><Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} /></div>
      <div className="flex">
        <div><MenuLateral /></div>
        <div className="flex-1 p-10">
          {/* Conteúdo principal */}
        </div>
      </div>
    </div>
  );
}

export default App
