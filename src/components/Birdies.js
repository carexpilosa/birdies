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
    return (
      <div>
        {
          this.props.birdies.map((item, idx) => {
            return <div key={item.id}>
              <label>{item.name}
                <input type="checkbox" name={item.id} onClick={e => this._chgVal(e, item.id)}
                       value={item.id} style={{visibility: 'hidden'}}/>
              </label>
              <button onClick={e => this._showDesc(e, item.id)}>DESC</button>
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
    console.log(id);
    if(id) {
      this.setState({
        showDescID: id
      });
    }
  }

  _chgVal(e, id) {
    let values = this.state.values;
    if(! values[id]) {
      values[id] = [];
    }
    values[id].push(e.target.value);
    this.setState({
      values
    });
  }

  getBirdyById(id) {
    let filtered = this.props.birdies.filter(bird => {
      return id === bird.id;
    });
    return filtered[0];
  }
}

export default Birdies;
