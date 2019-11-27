import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { injectReducer } from '../../utils/storeUtils';
import * as actions from './actions';
import reducer from './reducer';
import { domain } from './constants';
import { createKeySelector } from './selectors';
import { GridCol, PageHeader } from '../../components/StyleHelpers';

const RobotsContainer = styled(GridCol)`
`;



const RobotsPage = props => {
  injectReducer(domain, reducer);
  const { status, getRobots } = props;
  if (status === 'initial') getRobots('hello there');
  return (
    <RobotsContainer col={9}>
    <PageHeader>
      <h1>Robots</h1>
    </PageHeader>
      
      <div>
        hello there there are robots
      </div>
    </RobotsContainer>
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

const mapDispatchToProps = { ...actions }

export default connect(mapStateToProps, mapDispatchToProps)(RobotsPage);
