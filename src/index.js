import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Relatives from './Relatives';

const Main = () => {
  return (
    <React.StrictMode>
      <Relatives />
    </React.StrictMode>
  )
}
ReactDOM.render(<Main />, document.getElementById('root'));
