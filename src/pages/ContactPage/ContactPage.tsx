import React from 'react';
import './ContactPage.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import headerBg from '../../assets/img/blog-bg.jpg';
import { Container } from '@material-ui/core';
import AsideInfo from '../../components/AsideInfo/AsideInfo';

const header = {
  title: 'Contact',
  desc: 'Free free to contact with me.',
  img: headerBg,
};

const ContactPage = () => {
  return (
    <div className="page resume-page">
      <PageHeader title={header.title} desc={header.desc} img={header.img} />
      <Container>
        <div className="aside-layout page-container">
          <AsideInfo />
          <div className="aside-layout__article">123</div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
