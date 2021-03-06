import React from 'react';

type Props = {
  id: string;
  name: string;
  email: string;
};

const ChaokaiCard: React.FC<Props> = ({ id, name, email }) => {
  return (
    <div className="chaokai-card">
      <h2>{`Name: ${name}`}</h2>
      <h3>{`Email: ${email}`}</h3>
    </div>
  );
};

export default ChaokaiCard;
