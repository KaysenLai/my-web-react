import React from 'react';
import './skillCard.scss';
import { SkillCard } from '../../types';

const skillCard: React.FC<SkillCard> = (props) => {
  const { title, description, icon } = props;
  return (
    <div className="skill-card">
      <div className="skill-card__mask">
        <div className="skill-card__mask__text">
          <p>{description}</p>
        </div>
      </div>
      <div className="skill-card__icon">
        <img src={icon} alt="skill design icon" />
      </div>
      <div className="skill-card__text">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default skillCard;
