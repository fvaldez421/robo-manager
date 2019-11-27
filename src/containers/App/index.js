import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { injectReducer } from '../../utils/storeUtils';
import * as actions from './actions';
import reducer from './reducer';
import { domain } from './constants';
import { createListSelector } from './selectors';

import SideNav from '../../components/SideNav';
import '../../utils/resetStyles.css';
import Routes from './Routes';


function App(props) {
  injectReducer(domain, reducer);
  const { status = 'initial', organizations, loadOrgs } = props;
  if (status === 'initial' && !organizations) loadOrgs();
  return (
    <div className="App">
      <SideNav />
      <Routes />
    </div>
  );
}


App.propTypes = {
  status: PropTypes.string.isRequired,
  organizations: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => createStructuredSelector({
  organizations: createListSelector('organizations')(state),
});

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(App);
