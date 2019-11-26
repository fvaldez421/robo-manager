import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { injectReducer } from '../../utils/storeUtils';
import * as actions from './actions';
import reducer from './reducer';
import { domain } from './constants';
import { createKeySelector } from './selectors';
import { createStructuredSelector } from 'reselect';


const RobotsPage = props => {
  injectReducer(domain, reducer);
  console.log(props)
  const { status, activeRobots, getRobots } = props;
  if (status === 'initial') getRobots('hello there');
  return (
    <div>
      These are robots
    </div>
  )
};


RobotsPage.propTypes = {
  status: PropTypes.string,
  activeRobots: PropTypes.array,
  getRobots: PropTypes.func,
};

const mapStateToProps = state => createStructuredSelector({
  status: createKeySelector('status')(state),
  activeRobots: createKeySelector('activeRobots')(state)
});

// const mapDispatchToProps = mapDispatch(actions);
const mapDispatchToProps = { ...actions }

export default connect(mapStateToProps, mapDispatchToProps)(RobotsPage);
