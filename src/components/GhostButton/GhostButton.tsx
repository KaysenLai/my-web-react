import React from 'react';
import './GhostButton.scss';
import { Button } from '@material-ui/core';

const GhostButton: React.FC = () => {
  return (
    <div>
      <Button className="ghost-btn">resume</Button>
    </div>
  );
};

export default GhostButton;
