import React from 'react';
import './ProjectCard..scss';
import { IProjectCard } from '../../types';

const ProjectCard: React.FC<IProjectCard> = (props) => {
  const { title, url, img, theme } = props;
  return (
    <a href={url} target="_blank">
      <div className="project-card" style={{ backgroundImage: `url(${img})` }}>
        <div className={`project-card__mask project-card__mask--${theme ? theme : 'light'}`} />
        <h3 className="project-card__text title-font">{title}</h3>
      </div>
    </a>
  );
};

export default ProjectCard;
