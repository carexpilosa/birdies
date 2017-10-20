'use strict';

import React, {Component} from 'react';

class Birdies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      showDescID: ''
    }
  }

  render() {
    let values = this.state.values;
    return (
      <div>
        {
          this.props.birdies.map((item, idx) => {
            let radioValue = 'radio_'+item.id;
            return <div key={item.id}>
              <label>{item.name}
                <input type="checkbox" name={item.id} onClick={e => this._chgVal(e, item.id)}
                       value={item.name} style={{visibility: 'hidden'}} />
              </label>
              <button onClick={e => this._showDesc(e, item.id)}>DESC</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <label>{values[radioValue] === 'red' ? 'Grün' : '[Grün]'}
                <input type="radio" id={radioValue} name={radioValue}
                       value="green" onClick={e => this._chgVal(e, radioValue)}
                       style={{visibility: 'hidden'}} />
              </label>
              <label>{values[radioValue] === 'red' ? '[Rot]' : 'Rot'}
                <input type="radio" id={radioValue} name={radioValue}
                       value="red" onClick={e => this._chgVal(e, radioValue)}
                       style={{visibility: 'hidden'}} />
              </label>
            </div>
          })
        }
        <br/><br/>
        <div id="descDiv">
        {
          this.state.showDescID && this.getBirdyById(this.state.showDescID) ?
            <div style={{backgroundColor: 'lightGreen'}}>
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
    /*if(! values[id]) {
      values[id] = [];
    }
    if (! values[id].includes(e.target.value)) {
      values[id].push(e.target.value);
    }*/
    values[id] = e.target.value;
    this.setState({
      values
    });
    console.log(this.state.values);
  }

  getBirdyById(id) {
    let filtered = this.props.birdies.filter(bird => {
      return id === bird.id;
    });
    return filtered[0];
  }
}

export default Birdies;
