import React from 'react';
import { shape } from 'prop-types';
import Header from '../Header';
import { container } from './styles';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className={container}>
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: shape({}).isRequired,
};
export default Layout;
