import React from 'react';

const ActivityItem = ({ title, description }) => (
  <div className="activity-item">
    <h4 className="activity-title">{title}</h4>
    <ul className="activity-description">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Activity = ({ data }) => (
  <div className="activity-table">
    <div className="table">
      <ActivityItem
        title="중간 강도의 유산소 운동"
        description={data.middleIntensity}
      />
      <ActivityItem
        title="격렬한 강도의 유산소 운동"
        description={data.highIntensity}
      />
    </div>
  </div>
);

export default Activity;
