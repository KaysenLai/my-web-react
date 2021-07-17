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
  const handleSubmit = () => {};
  return (
    <div className="page contact-page">
      <PageHeader title={header.title} desc={header.desc} img={header.img} />
      <Container>
        <div className="aside-layout page-container">
          <AsideInfo />
          <div className="aside-layout__article contact-article">
            <form action="https://formspree.io/f/xdopydja" method="POST" onSubmit={handleSubmit}>
              <label>
                Your Name:
                <input type="text" name="name" />
              </label>
              <label>
                Your Email:
                <input type="text" name="email" />
              </label>
              <label>
                Your Message:
                <textarea name="message" />
              </label>

              <button type="submit">Send</button>
            </form>
            <h3>Address:</h3>
            <p>Toowong 4066, Brisbane, QLD, AU.</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28317.51369534389!2d152.96717297640822!3d-27.478933354753856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9150c0e176822d%3A0x502a35af3de9b80!2z5piG5aOr5YWw5bee5Zu-5pe66YKu5pS_57yW56CBOiA0MDY2!5e0!3m2!1szh-CN!2sau!4v1626540462456!5m2!1szh-CN!2sau"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
