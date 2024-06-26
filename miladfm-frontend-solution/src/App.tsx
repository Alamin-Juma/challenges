import React from 'react';
import './assets/styles/main.scss';
import WrapperComponent from './components/WrapperComponent/Wrapper.component';
import BoxComponent from './components/BoxComponent/Box.component';
import { timeframes } from './utils/timeframes';

function App() {
  return (
    <div className="app">
      {timeframes.map((data, index) => (
        <WrapperComponent key={index} colorType={getColorType(index)}>
          <BoxComponent timeFrameData={[data]} />
        </WrapperComponent>
      ))}
    </div>
  );
}

const getColorType = (index: number) => {
  const colors = ['orange', 'blue', 'purple', 'lightgreen', 'violet', 'yellow'];
  return colors[index % colors.length];
};

export default App;
