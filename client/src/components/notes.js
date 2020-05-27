import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div className="notes">notes component</div>
    );
  }
}

export default Notes;
