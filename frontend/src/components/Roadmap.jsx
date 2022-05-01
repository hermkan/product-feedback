import React from 'react';
import RoadmapHeader from './RoadmapHeader';
import RoadmapTasks from './RoadmapTasks';

function Roadmap() {
  return (
    <div className="flex flex-col gap-4">
      <RoadmapHeader />
      <RoadmapTasks />
    </div>
  );
}

export default Roadmap;
