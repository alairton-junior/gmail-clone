import PropTypes from 'prop-types';

const MenuItem = ({ label, icon, number, bold, selected, onClick }) => {
  return (
    <div
      className={`flex items-center px-4 py-3 cursor-pointer text-gray-700 ${
        selected ? 'bg-blue-100 text-white rounded-r-full' : ''
      } ${!selected && 'hover:bg-blue-100 rounded-r-full'} ${selected && 'hover:bg-blue-500 hover:rounded-r-full'}`}
      onClick={onClick}
    >
      <span className="mr-3 ml-5">{icon}</span>
      <span className={`flex-1 ${bold ? 'font-bold' : ''}`}>{label}</span>
      {number && <span className="font-bold">{number}</span>}
    </div>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  number: PropTypes.number,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  bold: PropTypes.bool,
};

export default MenuItem;
