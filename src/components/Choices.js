'use strict';
import React, {Component} from 'react';
import { connect } from 'react-redux';

class Choices extends Component {
  render() {
    return <div>Choices</div>
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Choices);
