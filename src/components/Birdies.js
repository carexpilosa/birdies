'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { testAction } from '../actions';

class Birdies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      showDescID: ''
    }
  }

  render() {
    let {values, showDescID} = this.state;
    let descriptionBgcolor = values['radio_' + this.state.showDescID] === 'red'
      ? 'lightCoral' : 'lightGreen';
    let {storeBirdies} = this.props;
    console.log(showDescID);
    console.log(this.getBirdyById(showDescID));
    return (
      <div>
        <div style={{ width: '350px', height: '50px', overflowY: 'scroll', overflowX: 'hidden'}} onScroll={e => this.scrollHandle(e)}>
          <table>
            <tbody>
            {
              storeBirdies.map((item, idx) => {
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
          <span id="indicator" ref={ c => this.indicator = c }>&nbsp;</span>
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
      </div>
    );
  }

  scrollHandle(e) {
    //console.log('scrollHandle');
    //console.log(e.target.getBoundingClientRect().bottom);
    //console.log(this.indicator.getBoundingClientRect().bottom);
    if(this.indicator.getBoundingClientRect().bottom <
       e.target.getBoundingClientRect().bottom) {
      console.log('<<<<<<<<<<<<<<<<');
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
    let values = this.state.values;
    values[id] = e.target.value;
    this.setState({
      values
    });
    let data = [{id: 'makapopoKladopo', name: 'Great Whisler', desc: 'kleener'}];
    this.props.testAction(data)
  }

  getBirdyById(id) {
    console.log(this.props.storeBirdies);
    let filtered = this.props.storeBirdies.filter(bird => {
      return id === bird.id;
    });
    return filtered[0];
  }
}

function mapStateToProps(state) {
  return {
    storeBirdies: state.storeBirdies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    testAction: (data) => dispatch(testAction(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Birdies);
