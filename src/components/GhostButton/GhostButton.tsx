import React from 'react';
import './GhostButton.scss';
import { Button } from '@material-ui/core';

interface ghostButtonProps {
  title: string;
  width: number;
  onClick?: any;
}

const GhostButton: React.FC<ghostButtonProps> = (props) => {
  const { title, width, onClick } = props;
  return (
    <div className="ghost-btn" onClick={onClick}>
      <span className="ghost-btn-mask" style={{ width: `${width}px` }}>
        {title}
      </span>
      <Button>{title}</Button>
    </div>
  );
};

export default GhostButton;
