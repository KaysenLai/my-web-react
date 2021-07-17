import React from 'react';
import './ResumePage.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import headerBg from '../../assets/img/resume-bg.jpg';
import { Container } from '@material-ui/core';
import AsideInfo from '../../components/AsideInfo/AsideInfo';

const header = {
  title: 'Resume',
  desc: "I'm hoping to work with you.",
  img: headerBg,
};

const ResumePage = () => {
  return (
    <div className="page resume-page">
      <PageHeader title={header.title} desc={header.desc} img={header.img} />
      <Container>
        <div className="aside-layout page-container">
          <AsideInfo />
          <article className="aside-layout__article article">
            <h3>About Me</h3>
            <div className="article__text">
              <p className="with-arrow"> 2 years hands on experience in web development.</p>
              <p className="with-arrow"> Practical knowledge of web solutions architecture.</p>
              <p className="with-arrow"> Great problems solving and self-learning skills.</p>
              <p className="with-arrow"> Agile experience in teamwork project</p>
              <p className="with-arrow"> Excellent UI/UX skills with commercial design</p>
              {/*<p>*/}
              {/*  I'm an enthusiastic person interested in both <strong>technologies and designs</strong>. As a web*/}
              {/*  developer, I focus on working solutions and always try to implement ideas to{' '}*/}
              {/*  <strong>excellent projects</strong>. I am a <strong>quick and active learner</strong> who are always*/}
              {/*  curious about new technologies.*/}
              {/*</p>*/}
            </div>
            <h3>Skills</h3>
            <div className="article__text">
              <p className="with-arrow">
                <strong>Front-End:</strong> HTML5, CSS3, SASS/LESS, styled-component, Bootstrap 4, Responsive Design,
                JavaScirpt ES6, TypeScript 3.x, JQuery 3.x, Ajax, Axios, ReactJS, React-hooks, Mobx, Redux, Redux-thunk,
                Redux-saga, npm, yarn, Webpack, TSLint, ESLint, Ant Design, Material UI, Chart.js
              </p>
              <p className="with-arrow">
                <strong>Back-End: </strong> Node.js, nvm, Express, Koa, YAML, SOAP, RESTful APIs, JWT Token, php,
                CodeIgniter, Cookie, Session, Flask
              </p>
              <p className="with-arrow">
                <strong>Database: </strong> MySQL, MongoDB
              </p>
              <p className="with-arrow">
                <strong>Testing Methodologies: </strong> Functional testing: Cypress, Unit testing: Jest Framework,
                JUnit
              </p>
              <p className="with-arrow">
                <strong>Cloud Services: </strong> AWS S3, AWS EC2, AWS Lambda, AWS Route53, AWS CloudFront, UQzone
              </p>
              <p className="with-arrow">
                <strong>Methodologies: </strong> Agile, Scrum, Kanban, Test Driven Development (TDD) , Behavior Driven
                Development (BDD), CI/CD, OOP
              </p>
              <p className="with-arrow">
                <strong>Develops Tools & Platforms: </strong> Jira, GitHub, Bitbucket, Postman, Swagger
              </p>
              <p className="with-arrow">
                <strong>DevOps: </strong> Docker, Docker-compose, nginx
              </p>
              <p className="with-arrow">
                <strong>Programming Languages: </strong> Python, Javascript, Java, MatLab
              </p>
              <p className="with-arrow">
                <strong>Design tools: </strong> Adobe Photoshop, Illustrator, XD, Premmier Pro, After Effect, Figma
              </p>
            </div>
            <h3>Education</h3>
            <div className="article__text">
              <h4>Master of Information Technology</h4>
              <p className="with-arrow">University of Queensland</p>
              <p className="with-arrow">2020.2 - 2021.12</p>
              <p className="with-arrow">GPA: 6.28/7.0</p>
            </div>
            <div className="article__text">
              <h4>Bachelor of Mechanical Manufacture and automation</h4>
              <p className="with-arrow">Central South University</p>
              <p className="with-arrow">2015 - 2019</p>
            </div>

            {/*<h3>Internship</h3>*/}
            {/*<div className="article__text">*/}
            {/*  <h4>Intern at UI/UX Design Department</h4>*/}
            {/*  <p className="with-arrow">*/}
            {/*    16/07/2018 - 16/08/2018 <strong>Beijing LKK Design Technology Co.,Ltd.</strong>*/}
            {/*  </p>*/}
            {/*  <p className="with-arrow">*/}
            {/*    Analyzed the features of "Xiaomi" brand design and investigated target user groups;*/}
            {/*  </p>*/}
            {/*  <p className="with-arrow">*/}
            {/*    Responsible for the UI design of Product Station of "Yuemi" Type-C Converter at JD.com, completed the*/}
            {/*    main drawings and detail pages in teams.*/}
            {/*  </p>*/}
            {/*</div>*/}
          </article>
        </div>
      </Container>
    </div>
  );
};

export default ResumePage;
