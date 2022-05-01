import React from 'react';
import { BsDot } from 'react-icons/bs';

function SidebarRoadmap() {
  return (
    <div className="theme-product-feedback rounded-10 h-h-tags-container w-w-tags-container bg-skin-fill flex flex-col p-2 text-skin-inverted">
      <div className="flex justify-between p-2">
        <span className="text-skin-accent-navy font-bold text-2xl">
          Roadmap
        </span>
        <span className="text-skin-accent underline  cursor-pointer hover:text-skin-accent-purple-50">
          View
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between pr-5">
          <div className="flex items-center">
            <div>
              <BsDot size={30} color="#F49F85" />
            </div>
            <div>Planned</div>
          </div>
          <div className="font-bold text-xl">2</div>
        </div>

        <div className="flex justify-between pr-5">
          <div className="flex items-center">
            <div>
              <BsDot size={30} color="#AD1FEA" />
            </div>
            <div>In-Progress</div>
          </div>
          <div className="font-bold text-xl">3</div>
        </div>

        <div className="flex justify-between pr-5">
          <div className="flex items-center">
            <div>
              <BsDot size={30} color="#62BCFA" />
            </div>
            <div>Live</div>
          </div>
          <div className="font-bold text-xl">1</div>
        </div>
      </div>
    </div>
  );
}

export default SidebarRoadmap;
