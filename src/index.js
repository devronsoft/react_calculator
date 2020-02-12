import React from 'react'; // Looking for an export from the node_module library e.g. JavaScript file (being the library itself)
import ReactDOM from 'react-dom';
import './index.css';

import Calculator from './Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Calculator />, document.getElementById('root'));


serviceWorker.unregister();
