import HelpDropdown from "./dropdown/HelpDropdown"
import { IconHelp, IconSettings, IconApps } from "../../assets/icons"
import { useState } from "react"

function Options() {
  const [toggleHelp, setToggleHelp] = useState(false)

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation()
            setToggleHelp(!toggleHelp)
          }}
          className="flex items-center justify-center size-10 rounded-full hover:bg-[#DDE3EC]"
        >
          <IconHelp className="size-6 fill-[#54585D] object-cover" />
        </button>
        <HelpDropdown toggleHelp={toggleHelp} setToggleHelp={setToggleHelp} />
      </div>
      <div className="relative">
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-[#DDE3EC]">
          <IconSettings className="size-6 fill-[#54585D] object-cover" />
        </button>
      </div>
      <div className="relative">
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-[#DDE3EC]">
          <IconApps className="size-6 fill-[#54585D] object-cover" />
        </button>
      </div>
      <div className="relative">
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-[#DDE3EC]">
          <span className="flex items-center justify-center size-8 bg-slate-600 rounded-full text-white font-inter">
            JD
          </span>
        </button>
      </div>
    </div>
  )
}

export default Options
