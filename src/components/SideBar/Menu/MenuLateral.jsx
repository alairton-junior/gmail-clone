import { useState } from 'react';
import MenuItem from './MenuItem';
import MarcadoresLateral from '../Marcadores/MarcadoresLateral';

// eslint-disable-next-line react/prop-types
const MenuLateral = ({ toggleMenu }) => {
    const [selectedItem, setSelectedItem] = useState('null');

    const menuItems = [
        {
            label: 'Inbox',
            icon: (
                <svg width="24" height="24" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.33333 25.375C5.69167 25.375 5.14236 25.1384 4.68542 24.6651C4.22847 24.1918 4 23.6229 4 22.9583V6.04167C4 5.37708 4.22847 4.80816 4.68542 4.3349C5.14236 3.86163 5.69167 3.625 6.33333 3.625H22.6667C23.3083 3.625 23.8576 3.86163 24.3146 4.3349C24.7715 4.80816 25 5.37708 25 6.04167V22.9583C25 23.6229 24.7715 24.1918 24.3146 24.6651C23.8576 25.1384 23.3083 25.375 22.6667 25.375H6.33333ZM6.33333 22.9583H22.6667V19.3333H19.1667C18.5833 20.0986 17.8882 20.6927 17.0813 21.1156C16.2743 21.5385 15.4139 21.75 14.5 21.75C13.5861 21.75 12.7257 21.5385 11.9187 21.1156C11.1118 20.6927 10.4167 20.0986 9.83333 19.3333H6.33333V22.9583ZM14.5 19.3333C15.2389 19.3333 15.9097 19.1118 16.5125 18.6687C17.1153 18.2257 17.5333 17.6417 17.7667 16.9167H22.6667V6.04167H6.33333V16.9167H11.2333C11.4667 17.6417 11.8847 18.2257 12.4875 18.6687C13.0903 19.1118 13.7611 19.3333 14.5 19.3333Z"
                        fill="#1C1B1F"
                    />
                </svg>
            ),
            number: '7,152', // Adicionado número
            bold: true,
        },
        {
            label: 'Snoozed',
            icon: (
                <svg width="24" height="23" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 26.5C12.3568 26.5 10.8177 26.1858 9.38263 25.5573C7.94758 24.9288 6.69875 24.0797 5.63615 23.0102C4.57355 21.9406 3.73005 20.6836 3.10563 19.2392C2.48122 17.7947 2.16901 16.2455 2.16901 14.5916C2.16901 12.9377 2.48122 11.3885 3.10563 9.94402C3.73005 8.49958 4.57355 7.24258 5.63615 6.17303C6.69875 5.10348 7.94758 4.25445 9.38263 3.62595C10.8177 2.99746 12.3568 2.68321 14 2.68321C15.6432 2.68321 17.1823 2.99746 18.6174 3.62595C20.0524 4.25445 21.3013 5.10348 22.3638 6.17303C23.4264 7.24258 24.27 8.49958 24.8944 9.94402C25.5188 11.3885 25.831 12.9377 25.831 14.5916C25.831 16.2455 25.5188 17.7947 24.8944 19.2392C24.27 20.6836 23.4264 21.9406 22.3638 23.0102C21.3013 24.0797 20.0524 24.9288 18.6174 25.5573C17.1823 26.1858 15.6432 26.5 14 26.5ZM17.6808 20.1489L19.5211 18.2964L15.3146 14.0623V7.97583H12.6854V15.1209L17.6808 20.1489ZM5.58685 0.5L7.42723 2.35242L1.84038 7.97583L0 6.12341L5.58685 0.5ZM22.4131 0.5L28 6.12341L26.1596 7.97583L20.5728 2.35242L22.4131 0.5ZM14 23.8537C16.5634 23.8537 18.7379 22.955 20.5235 21.1578C22.3091 19.3605 23.2019 17.1718 23.2019 14.5916C23.2019 12.0115 22.3091 9.82273 20.5235 8.02545C18.7379 6.22816 16.5634 5.32952 14 5.32952C11.4366 5.32952 9.26213 6.22816 7.47653 8.02545C5.69092 9.82273 4.79812 12.0115 4.79812 14.5916C4.79812 17.1718 5.69092 19.3605 7.47653 21.1578C9.26213 22.955 11.4366 23.8537 14 23.8537Z"
                        fill="#1C1B1F"
                    />
                </svg>
            ),
            
        },
        {
            label: 'Sent',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3 20.5V4.5L22 12.5L3 20.5ZM5 17.5L16.85 12.5L5 7.5V11L11 12.5L5 14V17.5Z"
                        fill="#1C1B1F"
                    />
                </svg>
            ),
        },
        {
            label: 'Drafts',
            icon: (
                <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M6.49992 26.1668C5.90409 26.1668 5.39402 25.9384 4.96971 25.4814C4.5454 25.0245 4.33325 24.4752 4.33325 23.8335V5.16683C4.33325 4.52516 4.5454 3.97586 4.96971 3.51891C5.39402 3.06197 5.90409 2.8335 6.49992 2.8335H15.1666L21.6666 9.8335V23.8335C21.6666 24.4752 21.4544 25.0245 21.0301 25.4814C20.6058 25.9384 20.0958 26.1668 19.4999 26.1668H6.49992ZM14.0833 11.0002V5.16683H6.49992V23.8335H19.4999V11.0002H14.0833Z" 
                            fill="#1C1B1F" fillOpacity="0.72"/>
                </svg>

            ),
            number: '90', // Adicionado número
            bold: true,
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
        <MarcadoresLateral toggleMenu={toggleMenu} />
    </div>
  );
};

export default MenuLateral;
