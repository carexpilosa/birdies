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
    console.log(this.props);
    return (
      <div>
        <table>
          <tbody>
          {
            this.props.birdies.map((item, idx) => {
              let radioValue = 'radio_'+item.id;
              let fontWeight = item.id === showDescID ? 'bold' : 'normal';
              return <tr key={item.id}>
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
        <div id="descDiv">
        {
          showDescID && this.getBirdyById(showDescID) ?
            <div style={{
              'backgroundColor': descriptionBgcolor,
              'width': '400px'
            }}>
              {
                  `${this.getBirdyById(this.state.showDescID).name}:
                   ${this.getBirdyById(this.state.showDescID).desc}`
              }
            </div>
          : null
        }
        </div>
      </div>
    );
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
    this.props.testAction({id, value: e.target.value})
  }

  getBirdyById(id) {
    let filtered = this.props.birdies.filter(bird => {
      return id === bird.id;
    });
    return filtered[0];
  }
}

function mapStateToProps(state) {
  return {
    testValues: state.testValues
  };
}

function mapDispatchToProps(dispatch) {
  return {
    testAction: (data) => dispatch(testAction(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Birdies);
