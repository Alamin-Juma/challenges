import React from 'react';
import '../../assets/styles/main.scss';

interface WrapperComponentProps {
  colorType: 'orange' | 'blue' | 'purple' | 'lightgreen' | 'violet' | 'yellow';
  children: React.ReactNode;
}

const WrapperComponent: React.FC<WrapperComponentProps> = ({ colorType, children }) => {
  return (
    <div className={`wrapper ${colorType}`}>
      {children}
    </div>
  );
};

export default WrapperComponent;
