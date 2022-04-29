import React from 'react';
import DropDownItem from './DropDownItem';

function StatusDropDown() {
  return (
    <ul className=" w-w-drp-dwn h-h-drp-dwn grid grid-rows-4 bg-skin-fill divide-y-1 mix-blend-normal divide-opacity-25 divide-accent-navy shadow-lg rounded-10">
      {['Suggestion', 'Planned', 'In-Progress', 'Live'].map((item) => (
        <DropDownItem name={item} />
      ))}
    </ul>
  );
}

export default StatusDropDown;
