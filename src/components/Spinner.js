import React, { Component } from 'react';
import loading from './89.gif';

export default class Spinner extends Component {
  render() {
    return <div style={{height:"30px", width:"30px"}} className='d-flex justify-content-center '>
        <img  className='spinner ' src={loading} alt="loading" />
    </div>;
  }
}
