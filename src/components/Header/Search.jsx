import { useState } from "react"
import InputDropdown from "./dropdown/InputDropdown"
import { IconSearch, IconInstantMix } from "../../assets/icons"

function Search() {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <div
      className={`relative z-10 flex items-center min-w-[205px] max-w-[720px] w-full h-12 px-[5px] rounded-[48px] bg-[#E7EFFA] 
      ${isFocus ? "bg-white shadow-xl rounded-t-3xl rounded-b-none" : ""}`}
    >
      <button className="shrink-0 flex items-center justify-center size-10 rounded-full hover:bg-[#DDE3EC]">
        <IconSearch className="size-6 fill-[#54585D] object-cover" />
      </button>
      <input
        type="text"
        className="w-full font-inter bg-transparent outline-none"
        placeholder="Search mail"
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
      />
      <button className="shrink-0 flex items-center justify-center size-10 rounded-full hover:bg-[#DDE3EC]">
        <IconInstantMix className="size-6 fill-[#54585D] object-cover" />
      </button>
      <InputDropdown isFocus={isFocus} />
    </div>
  )
}

export default Search
