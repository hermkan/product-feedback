import React from 'react';
import Tag from './Tag';

function Tags() {
  return (
    <div
      className="theme-product-feedback rounded-10 mt-10  h-h-tags-container w-w-tags-container p-4 bg-skin-fill
      grid-tag
      "
    >
      <div className="rounded-10 w-w-ind-ux h-h-ind-ux flex flex-col text-xs text-skin-base bg-skin-tag-violet-default font-semibold cursor-pointer min-w-max justify-center items-center">
        All
      </div>
      {['UI', 'UX', 'Enhancement  ', 'Bug', 'Feature'].map((tag, index) => (
        <Tag key={index} name={tag} />
      ))}
    </div>
  );
}

export default Tags;
