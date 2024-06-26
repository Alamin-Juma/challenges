import React from 'react';
import '../../assets/styles/main.scss';

interface WrapperComponentProps {
  colorType: 'orange' | 'blue' | 'purple' | 'lightgreen' | 'violet' | 'yellow';
  children: React.ReactNode;
  imageType?: string; 
}

const WrapperComponent: React.FC<WrapperComponentProps> = ({ colorType, children, imageType }) => {
  return (
    <div className={`wrapper ${colorType}`} >
      {imageType && <img src={imageType} alt="icon" className="wrapper-icon" />}
      {children}
    </div>
  );
};

export default WrapperComponent;
