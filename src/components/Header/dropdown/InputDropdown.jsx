import { useState } from "react"
import { IconCheck } from "../../../assets/icons"
import PropTypes from "prop-types"

function InputDropdown({ isFocus }) {
  const data = ["Has attachment", "Last 7 days", "From me"]
  const [checked, setChecked] = useState([...Array(data.length).fill(false)])

  function buttonCheck(index) {
    setChecked((arrayButtom) =>
      arrayButtom.map((buttom, i) => (i === index ? !buttom : buttom))
    )
  }

  return (
    <div
      className={`absolute left-0 top-12 w-full h-20 rounded-b-3xl shadow-xl bg-white font-inter
      ${isFocus ? "block" : "hidden"}`}
    >
      <div className="flex items-center w-full h-12 gap-5 px-2 border-y-[1px] border-gray-300 overflow-x-auto scrollbar-hide">
        {data.map((text, i) => (
          <button
            onMouseDown={(e) => {
              e.preventDefault()
              buttonCheck(i)
            }}
            key={i}
            className={`shrink-0 flex items-center justify-center h-8 gap-1 px-2 text-sm rounded-md border-black
            ${
              checked[i]
                ? "text-[#041e49] bg-[#9ec3ff] hover:bg-[#bbd5ff]"
                : "bg-transparent hover:bg-[#DDE3EC] border-[1px]"
            }`}
          >
            <IconCheck
              className={`size-5  
              ${checked[i] ? "block fill-[#041e49]" : "hidden"}`}
            />
            {text}
          </button>
        ))}
      </div>
    </div>
  )
}

InputDropdown.propTypes = {
  isFocus: PropTypes.bool.isRequired,
}

export default InputDropdown
