import { useState } from 'react';
import MenuItemCompose from './MenuCompose';

// eslint-disable-next-line react/prop-types
const MenuLateral = ({ toggleMenu }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    {
      label: 'Compose',
      icon: (
        <svg width="30" height="27" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.29167 25.3332H9.33333L21.9115 13.8332L19.8698 11.9665L7.29167 23.4665V25.3332ZM28.1458 11.8998L21.9479 6.29984L23.9896 4.43317C24.5486 3.92206 25.2352 3.6665 26.0495 3.6665C26.8637 3.6665 27.5503 3.92206 28.1094 4.43317L30.151 6.29984C30.7101 6.81095 31.0017 7.42761 31.026 8.14984C31.0503 8.87206 30.783 9.48873 30.224 9.99984L28.1458 11.8998ZM26.0312 13.8665L10.5729 27.9998H4.375V22.3332L19.8333 8.19984L26.0312 13.8665Z"
            fill="#1C1B1F"
            fillOpacity="0.72"
          />
        </svg>
      ),
    },
  ];

  const handleMenuItemClick = (index) => {
    setSelectedItem((prevSelected) => (prevSelected === index ? null : index));
  };

  return (
    <div className={`bg-white ${toggleMenu ? 'w-20' : 'w-80'}`}>
      <div className={`w-[199px] ${toggleMenu ? 'p-1 ml-5' : 'p-4'}`}>
        <button className={`pr-3 h-[60px] bg-[#C2E7FF] text-gray-700 font-bold flex items-center justify-center ${
            toggleMenu ? 'rounded-full w-11 h-11' : 'rounded-xl'
          }`}>
          {menuItems.map((item, index) => (
            <MenuItemCompose
              key={index}
              label={item.label}
              icon={item.icon}
              selected={selectedItem === index}
              onClick={() => handleMenuItemClick(index)}
              collapsed={toggleMenu}
            />
          ))}
        </button>
      </div>
    </div>
  );
};

export default MenuLateral;
