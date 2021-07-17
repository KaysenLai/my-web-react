import React from 'react';
import './GalleryPage.scss';
import headerBg from '../../assets/img/gallery-bg.jpg';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Container } from '@material-ui/core';

const header = {
  title: 'Gallery',
  desc: 'Capture moments, enjoy lives.',
  img: headerBg,
};

const GalleryPage = () => {
  return (
    <div className="page resume-page">
      <PageHeader title={header.title} desc={header.desc} img={header.img} />
      <Container className="page-container">
        <div>123</div>
      </Container>
    </div>
  );
};

export default GalleryPage;
