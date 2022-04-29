import React from 'react';
import CheckIcon from './CheckIcon';
import DropDownItem from './DropDownItem';

function BoardHeaderDropDown() {
  return (
    <ul className="w-w-drpmn h-h-drpmn grid grid-rows-4 bg-skin-fill divide-y-1 mix-blend-normal divide-opacity-25 divide-accent-navy shadow-lg rounded-10">
      {['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'].map(
        (item) => (
          <DropDownItem name={item} />
        )
      )}
    </ul>
  );
}

export default BoardHeaderDropDown;
