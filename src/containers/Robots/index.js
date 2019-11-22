import React from 'react';
import { connect } from "react-redux";


const RobotsPage = props => {
  console.log(props);
  return (
    <div>
      These are robots
    </div>
  )
};


RobotsPage.propTypes = {
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(RobotsPage);
