import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './components/Game'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
   
     
      <Game/>
    
    </React.StrictMode>,
    document.getElementById('root')
  );
//ReactDOM.render(<App />, document.getElementById('root'));

//serviceWorker.unregister();