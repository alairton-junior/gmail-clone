import './App.css'
import NavHeader from './Componets/Header/NavHeader'
import MenuLateral from './Componets/SideBar/Menu/MenuLateral'
import 'tailwindcss/tailwind.css';


function App() {
  return (
    <div>
      <div><NavHeader /></div>
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
