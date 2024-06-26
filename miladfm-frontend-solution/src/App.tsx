import React from 'react';
import './assets/styles/main.scss';
import WrapperComponent from './components/WrapperComponent/Wrapper.component';
import BoxComponent from './components/BoxComponent/Box.component';
import { timeframes } from './utils/timeframes';
import ProfileComponent from './components/ProfileComponent/Profile.component';
import images from './assets/images';

function App() {
  return (
    <div className="app">
      {/* Side navigation */}
      <div className="side-bar">
        <WrapperComponent colorType='lightgreen' imageType={images.someImage}>
          <ProfileComponent />
          <div className="profile-info">
            <h2>Daily</h2>
            <p>Weekly</p>
            <p>Monthly</p>
          </div>
        </WrapperComponent>
      </div>

      {/* Main content */}
      <div className="main">
        {timeframes.map((data, index) => (
          <WrapperComponent key={index} colorType={getColorType(index)} imageType={getImagesForWrapper(index)}>
            <BoxComponent timeFrameData={[data]} />
          </WrapperComponent>
        ))}
      </div>
    </div>
  );
}

const getColorType = (index: number) => {
  const colors = ['orange', 'blue', 'purple', 'lightgreen', 'violet', 'yellow'];
  return colors[index % colors.length];
};

const getImagesForWrapper = (index: number) => {
  const image = [images.job, images.fun,images.learning, images.sport, images.emails , images.health];
  return image[index % image.length];
};

export default App;
