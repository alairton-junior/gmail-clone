import React from 'react';

import CalendarIcon from '/src/assets/icons/Calendar.jsx';
import LightBulbIcon from '/src/assets/icons/LightBulb.jsx';
import TaskAltIcon from '/src/assets/icons/TaskAlt.jsx';
import GroupIcon from '/src/assets/icons/Group.jsx';
import AddIcon from '/src/assets/icons/Add.jsx';

const SidebarRight = () => {
  return (
    <aside className=" right-0 top-0 h-full bg-[#F6F8FC] p-5 pt-24 flex flex-col items-center gap-10">
      <CalendarIcon className="cursor-pointer"/>
      <LightBulbIcon className="cursor-pointer" />
      <TaskAltIcon className="cursor-pointer"/>
      <GroupIcon className="cursor-pointer" />
      <div className="w-full border-b border-gray-400"></div>
      <AddIcon className="cursor-pointer"/>
    </aside>
  );
};

export default SidebarRight;
