import { useState } from 'react';
import MenuItem from './MenuItemMacadores';

// eslint-disable-next-line react/prop-types
const MenuLateral = ({toggleMenu}) => {
  const [selectedItem, setSelectedItem] = useState('null');

const menuItems = [
    {
        label: 'done',
        icon: (
            <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="17" height="19" fill="#474849"/>
                <path d="M17 0L25.2272 9.5L17.0001 19L17 14.2109L17 9.42188V0Z" fill="#474849"/>
            </svg>

        ),
        number: '13', // Adicionado número
        bold: true,
    },
    {
        label: 'Jobs',
        icon: (
            <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="17" height="19" fill="#474849"/>
                <path d="M17 0L25.2272 9.5L17.0001 19L17 14.2109L17 9.42188V0Z" fill="#474849"/>
            </svg>
        ),
        number: '21', // Adicionado número
        bold: true,
        
    },
    {
        label: 'Sumit sir',
        icon: (
            <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="17" height="19" fill="#474849"/>
                <path d="M17 0L25.2272 9.5L17.0001 19L17 14.2109L17 9.42188V0Z" fill="#474849"/>
            </svg>
        ),
    },
    {
        label: 'More',
        icon: (
            <svg width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                    d="M14.5 21.1408L7.25 12.8908L8.94167 10.9658L14.5 17.2908L20.0583 10.9658L21.75 12.8908L14.5 21.1408Z" 
                    fill="#1C1B1F"/>
            </svg>

        ),
    },
];
const handleMenuItemClick = (index) => {
    setSelectedItem(prevSelected => (prevSelected === index ? null : index));
};

  return (
    <div className={`h-screen bg-white ${toggleMenu ? 'w-20' : 'w-[280px]'}`}>
        <div className='flex justify-between ml-9 mr-3'>
        {!toggleMenu && (
          <p className='text-xl font-medium'>Labels</p>
        )}
            <button className='w-[33px] h-[30px] p-0 bg-white hover:bg-blue-100' ><svg width="30" height="30" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.125 24.25V16.75H6.875V14.25H15.125V6.75H17.875V14.25H26.125V16.75H17.875V24.25H15.125Z" fill="#1C1B1F" fillOpacity="0.72"/>
            </svg>
            </button>
        </div>        
        {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          label={item.label}
          icon={item.icon}
          number={item.number} // Passa o número para o MenuItem
          bold={item.bold}
          selected={selectedItem === index}
          onClick={() => handleMenuItemClick(index)}
          collapsed={toggleMenu}
        />
      ))}
    </div>
  );
};

export default MenuLateral;
