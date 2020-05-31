import React from 'react';
import { shape } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Loader from '@components/Loader';
import Loadable from 'react-loadable';
import Layout from '@components/Layout';

const errorLoading = (err) => console.log('Dynamic home page loading failed', err);

const routeLogin = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ '@routes/Login').catch(errorLoading),
  loading: () => <Loader />,
  delay: 200,
});

const routeHome = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ '@routes/Home').catch(errorLoading),
  loading: () => <Loader />, // full page loader here
  delay: 200, // delay in milliseconds, useful for suspense
});

const routeNotFounde = Loadable({
  loader: () => import(/* webpackChunkName: "notFound" */ '@components/NotFound').catch(
    errorLoading,
  ),
  loading: () => <Loader />, // full page loader here
  delay: 200, // delay in milliseconds, useful for suspense
});

const Routes = (props) => {
  const { history, location, match } = props;

  return (
    <Layout history={history} location={location} match={match}>
      <Switch>
        <Route key="login" exact path="/" component={routeLogin} />
        <Route key="home" exact path="/home" component={routeHome} />
        <Route key="notfound" path="*" component={routeNotFounde} />
      </Switch>
    </Layout>
  );
};

Routes.propTypes = {
  history: shape({}).isRequired,
  location: shape({}).isRequired,
  match: shape({}).isRequired,
};

const RootRoutes = () => <Route component={Routes} />;

export default RootRoutes;
