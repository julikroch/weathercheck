import { Fragment } from 'react';
import Header from './components/Header';
import Form from './components/Form';

import './App.css';

function App() {
  return (
    <Fragment>
      <Header title='Clima React App' />

      <div className="form-container">
        <div className="row">
          <div className="col m6 s12">
            <Form />
          </div>
          <div className="col m6 s12">
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
