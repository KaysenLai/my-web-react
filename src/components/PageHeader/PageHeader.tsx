import React from 'react';
import './PageHeader.scss';
import { Container } from '@material-ui/core';

interface IPageHeader {
  title: string;
  desc: string;
  img: string;
}

const PageHeader: React.FC<IPageHeader> = (props) => {
  const { title, desc, img } = props;

  return (
    <div className="page-header" style={{ backgroundImage: `url(${img})` }}>
      <Container>
        <div className="page-header__container">
          <h2 className="title-font">{title}</h2>
          <h3 className="title-font">{desc}</h3>
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
