'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import Choices from './Choices';
import { testAction, getNextBirdiesFromRest, setBirdiesIsLoading } from '../actions';

class Birdies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      showDescID: '',
      len: 2,
      offset: 0,
    }
  }

  componentDidMount() {
    this._getNextBirdies();
  }

  render() {
    let {values, showDescID} = this.state;
    let descriptionBgcolor = values['radio_' + this.state.showDescID] === 'red'
      ? 'lightCoral' : 'lightGreen';
    let {storeBirdies} = this.props;
    return (
      <div>
        <div style={{ width: '350px', height: '150px', overflowY: 'scroll', overflowX: 'hidden'}} onScroll={e => this.scrollHandle(e)}>
          <table>
            <tbody>
            {
              storeBirdies.list.map((item, idx) => {
                let radioValue = 'radio_'+item.id;
                let fontWeight = item.id === showDescID ? 'bold' : 'normal';
                return <tr key={idx}>
                  <td width="120">
                    <label style={{fontWeight}}>{item.name}
                      <input type="checkbox" name={item.id} onClick={e => this._chgVal(e, item.id)}
                             value={item.name} style={{visibility: 'hidden'}} />
                    </label>
                  </td><td>
                    <button onClick={e => this._showDesc(e, item.id)}>DESC</button>
                  </td><td style={{backgroundColor: 'lightGreen'}}>
                    <label>{values[radioValue] === 'red' ? 'Grün' : '[Grün]'}
                      <input type="radio" id={radioValue} name={radioValue}
                             value="green" onClick={e => this._chgVal(e, radioValue)}
                             style={{visibility: 'hidden'}} />
                    </label>
                  </td><td style={{backgroundColor: 'lightCoral'}}>
                    <label>{values[radioValue] === 'red' ? '[Rot]' : 'Rot'}
                      <input type="radio" id={radioValue} name={radioValue}
                             value="red" onClick={e => this._chgVal(e, radioValue)}
                             style={{visibility: 'hidden'}} />
                    </label>
                  </td>
                </tr>
              })
            }
            </tbody>
          </table>
          <br/><br/>
          <div style={{
              height: '100px',
              width: '350px',
              display: 'table-cell',
              verticalAlign: 'bottom',
            }} id="indicator" ref={ c => this.indicator = c }>{this._showLoader() && <span>Loading ...</span>}</div>
        </div>
        <div id="descDiv">
        {
          showDescID && this.getBirdyById(showDescID) &&
            <div style={{
              'backgroundColor': descriptionBgcolor,
              'width': '400px'
            }}>
              {
                  `${this.getBirdyById(this.state.showDescID).name}:
                   ${this.getBirdyById(this.state.showDescID).desc}`
              }
            </div>
        }
        </div>
        <div style={{
          position: 'absolute',
          'top': '300px',
          'left': '20px'
        }}>{this.props.storeBirdies.isLoading
           ? 'is loading ...' : 'is NOT loading.'}</div>
        <Choices />
      </div>
    );
  }

  scrollHandle(e) {
    let indicatorBottom = this.indicator.getBoundingClientRect().bottom,
        divBottom = e.target.getBoundingClientRect().bottom;
    if(indicatorBottom <= divBottom
       && this.state.offset + this.state.len 
          < this.props.storeBirdies.pageSize) {
      this._getNextBirdies();
    }
  }

  _showDesc(e, id) {
    if(id) {
      this.setState({
        showDescID: id
      });
    }
  }

  _chgVal(e, id) {

  }

  getBirdyById(id) {
    let filtered = this.props.storeBirdies.list.filter(bird => {
      return id === bird.id;
    });
    return filtered[0];
  }

  updateOffset() {
    let {offset, len} = this.state;
    this.setState({ offset: offset + len });
  }

  _getNextBirdies() {
    if(this._showLoader) {
      this.props.setBirdiesIsLoading(true);
      this.updateOffset();
      this.props.getNextBirdiesFromRest(this.state.offset + this.state.len, this.state.len,
        this.props.storeBirdies.pageSize);
    }
  }

  _showLoader() {
    return (this.props.storeBirdies.isLoading);
  }
}

function mapStateToProps(state) {
  return {
    storeBirdies: state.storeBirdies,
    //isLoading: state.storeBirdies.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //fetchMembers: () => dispatch(loadMembers()),
    setBirdiesIsLoading: function(isLoadingVal) {
      dispatch(setBirdiesIsLoading(isLoadingVal))
    },
    getNextBirdiesFromRest: function(offset, len, pageSize) {
      dispatch(getNextBirdiesFromRest(offset, len, pageSize))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Birdies);
