import React from 'react';

function Tag({ name }) {
  return (
    <div className="theme-product-feedback rounded-10  min-w-fit w-w-ind-ux px-3 h-h-ind-ux flex flex-col items-center justify-center text-xs text-skin-accent bg-skin-tag-white font-semibold hover:bg-skin-tag-white-hover transition-all duration-300 cursor-pointer">
      {name}
    </div>
  );
}

export default Tag;
