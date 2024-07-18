import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { IconCheck } from "../../../assets/icons"

function InputDropdown({ isFocus }) {
  const data = ["Has attachment", "Last 7 days", "From me"]
  const [checked, setChecked] = useState([...Array(data.length).fill(false)])

  function defocus(index) {
    checked[index] = !checked[index]

    // setChecked((prevChecked) =>
    //   prevChecked.map((item, i) => (i === index ? !item : item))
    // )
  }

  // useEffect(() => {
  //   console.log(checked)
  // }, [checked])

  return (
    <div
      className={`absolute left-0 top-12 w-full h-40 rounded-b-3xl shadow-xl bg-white font-inter
      ${isFocus ? "block" : "hidden"}`}
    >
      <div className="flex items-center w-full h-12 gap-5 px-2 border-y-[1px] border-gray-300">
        {data.map((text, i) => (
          <button
            onMouseDown={(e) => {
              e.preventDefault()
              defocus(i)
            }}
            key={i}
            className={`flex items-center justify-center h-8 gap-1 px-2 text-sm border-[1px] rounded-md border-black hover:bg-[#DDE3EC]`}
          >
            <IconCheck
              className={`size-6 ${checked[i] ? "block" : "hidden"}`}
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
