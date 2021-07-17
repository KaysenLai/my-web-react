import React from 'react';
import './AsideInfo.scss';
import avatar from '../../assets/img/avatar.jpg';

const AsideInfo: React.FC = () => {
  return (
    <aside className="aside-layout__aside">
      <div className="aside-info__avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="aside-info__name">
        <h3 className="title-font">Chaokai Lai</h3>
      </div>
      <div className="aside-info__icons">
        <a href="https://github.com/KaysenLai" target="_blank">
          <span
            className="iconify aside-info__icons__github"
            data-inline="false"
            data-icon="ant-design:github-filled"
          />
        </a>
        <a href="https://www.linkedin.com/in/chaokai-lai/" target="_blank">
          <span
            className="iconify aside-info__icons__linkedin"
            data-inline="false"
            data-icon="ant-design:linkedin-filled"
          />
        </a>
        <span
          className="iconify aside-info__icons__twitter"
          data-inline="false"
          data-icon="ant-design:twitter-circle-filled"
        />
        <span
          className="iconify aside-info__icons__facebook"
          data-inline="false"
          data-icon="ant-design:facebook-filled"
        />
      </div>
      <div className="aside-info__info">
        <h3 className="aside-info__info__header">Status</h3>
        <div className="aside-info__info__content">Student</div>
      </div>
      <div className="aside-info__info">
        <h3 className="aside-info__info__header">Job title</h3>
        <div className="aside-info__info__content">Front-end Developer</div>
      </div>
      <div className="aside-info__info">
        <h3 className="aside-info__info__header">location</h3>
        <div className="aside-info__info__content">Brisbane, Australia</div>
      </div>
      <div className="aside-info__info">
        <h3 className="aside-info__info__header">Email</h3>
        <div className="aside-info__info__content">chaokai.lai@gmail.com</div>
      </div>

      <div className="aside-info__info">
        <h3 className="aside-info__info__header">Attachments</h3>
        <a className="aside-info__info__button">
          <button>
            <span className="iconify" data-inline="false" data-icon="ant-design:file-pdf-outlined"></span>
            <span>Chaokai Lai.pdf</span>
            <span className="button-decoration"></span>
          </button>
        </a>
        <a className="aside-info__info__button">
          <button>
            <span className="iconify" data-inline="false" data-icon="ant-design:file-word-outlined"></span>
            <span>Chaokai Lai.docx</span>
            <span className="button-decoration"></span>
          </button>
        </a>
      </div>
    </aside>
  );
};

export default AsideInfo;
