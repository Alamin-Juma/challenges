import React from 'react';
import '../../assets/styles/main.scss';

interface TimeFrame {
  current: number;
  previous: number;
}

interface Timeframes {
  daily: TimeFrame;
  weekly: TimeFrame;
  monthly: TimeFrame;
}

interface TimeFrameData {
  title: string;
  timeframes: Timeframes;
}

interface BoxComponentProps {
  timeFrameData: TimeFrameData[];
}

const BoxComponent: React.FC<BoxComponentProps> = ({ timeFrameData }) => {
  return (
    <div className="box">
      {timeFrameData.map((tData, index) => (
        <div key={index}>
          <h2 style={{ color: 'white', fontWeight: 'bold' }}>{tData.title}</h2>
          <p>Daily: {tData.timeframes.daily.current}hrs (Previous: {tData.timeframes.daily.previous}hrs)</p>
          <p>Weekly: {tData.timeframes.weekly.current}hrs (Previous: {tData.timeframes.weekly.previous}hrs)</p>
          <p>Monthly: {tData.timeframes.monthly.current}hrs (Previous: {tData.timeframes.monthly.previous}hrs)</p>
        </div>
      ))}
    </div>
  );
};

export default BoxComponent;
