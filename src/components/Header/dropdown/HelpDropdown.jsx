import { useEffect, useRef } from "react"
import PropTypes from "prop-types"

function HelpDropdown({ toggleHelp, setToggleHelp }) {
  const dropdownRef = useRef(null)

  useEffect(() => {
    function closeDropdown(event) {
      if (!dropdownRef.current.contains(event.target)) {
        setToggleHelp(false)
      }
    }
    document.addEventListener("click", closeDropdown)
    return () => document.removeEventListener("click", closeDropdown)
  }, [setToggleHelp])

  return (
    <div
      ref={dropdownRef}
      className={`absolute right-0 top-10 w-60 py-1.5 font-inter text-sm rounded-[4px] shadow-md text-black bg-white
      ${toggleHelp ? "block" : "hidden"}`}
    >
      <menu className="size-full">
        <li className="flex items-center w-full h-[30px] px-[30px] cursor-pointer hover:bg-gray-200">
          Help
        </li>
        <li className="flex items-center w-full h-[30px] px-[30px] cursor-pointer hover:bg-gray-200">
          Training
        </li>
        <li className="flex items-center w-full h-[30px] px-[30px] cursor-pointer hover:bg-gray-200">
          Updates
        </li>
        <span className="flex items-center w-full mt-1.5 pt-1.5 border-t-[1px] border-gray-200">
          <li className="flex items-center w-full h-[30px] px-[30px] cursor-pointer hover:bg-gray-200">
            Send Feedback to Google
          </li>
        </span>
      </menu>
    </div>
  )
}

HelpDropdown.propTypes = {
  toggleHelp: PropTypes.bool.isRequired,
  setToggleHelp: PropTypes.func.isRequired,
}

export default HelpDropdown
