import React from 'react';
import { IconStar } from '../../assets/icons';

function Message({ title, description, content }) {
  return (
    <>
      <div className="flex p-1 justify-between items-center">
        <div className="flex row items-center gap-2">
          <input type="checkbox" className="transform scale-150" />
          <IconStar className="w-[35px] h-[26px] fill-[#8B8B8B]" />
          <h2 className="text-md font-bold">{ title }</h2>

          <div className="flex p-2 flex-1">
            <h3>{ description}</h3>
            <p>
                { content }
            </p>
        </div>

        </div>

        <div className="flex p-2">
          <h3>Jun 9</h3>
        </div>
      </div>
    </>
  );
}

export default Message;
