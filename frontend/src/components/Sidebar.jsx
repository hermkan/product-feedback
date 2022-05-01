import React from 'react';
import SidebarRoadmap from './SidebarRoadmap';
import Tags from './Tags';

function Sidebar() {
  return (
    <aside className="flex flex-col gap-6">
      <Tags />
      <SidebarRoadmap />
    </aside>
  );
}

export default Sidebar;
