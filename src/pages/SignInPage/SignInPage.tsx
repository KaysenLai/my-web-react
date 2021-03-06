import React from 'react';
import './SignInPage.scss';
import logo from '../../assets/img/logo_blue.svg';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { Form, Input, Button } from 'antd';
import { LockOutlined, GoogleOutlined, MailOutlined } from '@ant-design/icons';

const SignInPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const googleSuccess = async (res: any) => {
    console.log(res);
    const result: object = res?.profileObj;
    const token: string = res?.tokenId;
    localStorage.setItem('profile', JSON.stringify({ result, token }));
    // const user = JSON.parse(localStorage.getItem('profile') as string);
    // when log out, localStorage.clear();
  };

  const googleFailure = (error: any) => {
    console.log(error);
    console.log('Google sign in was fail');
  };

  return (
    <div className="sign-in sign-in-layout">
      <div className="sign-in-layout__left">
        <div className="sign-in-left__container">
          <div className="sign-in__logo-container">
            <Link to="/">
              <img className="sign-in__logo" src={logo} alt="logo" />
            </Link>
          </div>
          <Form name="login" onFinish={onFinish}>
            <h2>Email</h2>
            <Form.Item
              className="form-email"
              name="email"
              rules={[
                { type: 'email', message: 'Please enter a valid E-mail.' },
                { required: true, message: 'Please input your email.' },
              ]}
            >
              <Input size="large" prefix={<MailOutlined />} placeholder="email" />
            </Form.Item>
            <h2>Password</h2>
            <Form.Item
              className="form-password"
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input size="large" prefix={<LockOutlined />} type="password" placeholder="password" />
            </Form.Item>
            <Form.Item className="form-sign-in">
              <Button size="large" type="primary" htmlType="submit" className="sign-in-form-button">
                Sign in
              </Button>
            </Form.Item>
            <Form.Item className="form-forgot">
              <a className="sign-in-form-forgot" href="">
                Forgot password?
              </a>
            </Form.Item>
            <GoogleLogin
              clientId="461763116622-gib4kebnqgedlsp6gnmun4nmdjo6s6nr.apps.googleusercontent.com"
              render={(renderProps) => (
                <Form.Item>
                  <Button
                    className="sign-in-form-button ant-btn-primary--theme-gray"
                    icon={<GoogleOutlined />}
                    size="large"
                    type="primary"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Sign In with Google
                  </Button>
                </Form.Item>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />

            <Form.Item>
              <Link to="signup">
                <Button size="large" type="primary" className="sign-in-form-button ant-btn-primary--theme-gray">
                  Create an account
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="sign-in-layout__right"></div>
    </div>
  );
};

export default SignInPage;
