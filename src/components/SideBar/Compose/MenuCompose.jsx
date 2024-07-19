import PropTypes from 'prop-types';

const MenuItemCompose = ({ label, icon, bold, onClick, collapsed }) => {
  return (
    <div
      className={`flex items-center px-2 py-1 cursor-pointer text-gray-700 bg-[rgba(194, 231, 255, 1)]`}
      onClick={onClick}
    >
      <span className="mr-3 ml-5">{icon}</span>
      {!collapsed && (
        <>
          <span className={`flex-1 ${bold ? 'font-bold' : ''}`}>{label}</span>
        </>
      )}
    </div>
  );
};

MenuItemCompose.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  bold: PropTypes.bool,
  collapsed: PropTypes.bool.isRequired,
};

export default MenuItemCompose;
