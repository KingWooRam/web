import React from 'react';

const ActivityItem = ({ title, description }) => (
  <div className="item">
    <h4 className="item-title">{title}</h4>
    <ul className="desc">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Activity = ({ data }) => (
  <div className="table">
    <ActivityItem title="중간 강도의 유산소 운동" description={data.middleIntensity} />
    <ActivityItem title="격렬한 강도의 유산소 운동" description={data.highIntensity} />
  </div>
);

export default Activity;
