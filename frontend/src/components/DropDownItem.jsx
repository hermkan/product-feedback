import React, { useState } from 'react';
import CheckIcon from './CheckIcon';

function DropDownItem({ name }) {
  const [showCheckIcon, setShowCheckIcon] = useState(false);
  const handleSelection = () => {
    setShowCheckIcon(!showCheckIcon);
  };
  return (
    <li
      className="flex justify-between items-center pr-4 pl-8 py-3 text-skin-accent-slate  hover:text-skin-accent-purple-100 cursor-pointer"
      onClick={handleSelection}
    >
      <span>{name}</span>
      {showCheckIcon && (
        <span>
          <CheckIcon />
        </span>
      )}
    </li>
  );
}

export default DropDownItem;
