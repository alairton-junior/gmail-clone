import { IconHelp, IconSettings, IconApps } from "../../assets/icons"

function Options() {
  return (
    <div className="flex items-center justify-center gap-2">
      <button className="flex items-center justify-center size-10 rounded-full hover:bg-[#DDE3EC]">
        <IconHelp className="size-6 object-cover" />
      </button>
      <button className="flex items-center justify-center size-10 rounded-full hover:bg-[#DDE3EC]">
        <IconSettings className="size-6 object-cover" />
      </button>
      <button className="flex items-center justify-center size-10 rounded-full hover:bg-[#DDE3EC]">
        <IconApps className="size-6 object-cover" />
      </button>
      <button className="flex items-center justify-center size-10 rounded-full hover:bg-[#DDE3EC]">
        <span className="flex items-center justify-center size-8 bg-slate-600 rounded-full text-white font-inter">
          JD
        </span>
      </button>
    </div>
  )
}

export default Options
