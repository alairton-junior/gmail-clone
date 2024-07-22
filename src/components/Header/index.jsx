import PropTypes from "prop-types"
import Search from "./Search"
import Options from "./Options"
import { IconMenu, IconGmail } from "../../assets/icons"

function Header({ toggleMenu, setToggleMenu }) {
  return (
    <header className="flex items-center w-full h-16 gap-20 px-6 font-inter text-[#54585D] bg-[#F5F7FB]">
      <div className="flex items-center h-full gap-6">
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="flex items-center justify-center size-10 hover:bg-[#DDE3EC] rounded-full"
        >
          <IconMenu className="fill-[#54585D] size-6 "/>
        </button>
        <div className="flex items-center gap-3 cursor-pointer">
          <IconGmail className="w-[35px] h-[26px]" />
          <p className="text-[22px] font-medium select-none">Gmail</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full gap-20">
        <Search />
        <Options />
      </div>
    </header>
  )
}

Header.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
  setToggleMenu: PropTypes.func.isRequired,
}

export default Header
