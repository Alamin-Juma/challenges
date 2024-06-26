import React from "react";
import "../../assets/styles/main.scss";

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
        <div key={index} className="app-wrapper">
          <h2 style={{ color: "white", fontWeight: "bold" }}>{tData.title}</h2>
          <div >
            {/* <p>Daily: {tData.timeframes.daily.current}hrs (Previous: {tData.timeframes.daily.previous}hrs)</p> */}
            <p>
              {" "}
              <span style={{ fontSize: "3.5em", fontWeight: "bolder" }}>
                {" "}
                {tData.timeframes.weekly.current}
              </span>
              <span style={{ marginLeft: "20px", fontSize:'1.5em' }}>Completed</span> <p />
            </p>
            <p>Last Week: {tData.timeframes.weekly.previous} Completed</p>

            {/* <p>Monthly: {tData.timeframes.monthly.current}hrs (Previous: {tData.timeframes.monthly.previous}hrs)</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxComponent;
