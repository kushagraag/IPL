import React from 'react';
import {ReactDOM, createRoot} from 'react-dom/client';
import App from './App';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';

const rootElement = document.getElementById('root');
var root;
if(rootElement){
  root = createRoot(rootElement);
}
if(root){
  root.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  );
}
// import React from 'react';
// import {ReactDOM, createRoot} from 'react-dom/client';
// import App from './App';
// import "./index.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './redux/store';

// const rootElement = document.getElementById('root');
// var root;
// if(rootElement){
//   root = createRoot(rootElement);
// }
// if(root){
//   root.render(
//     // <React.StrictMode>
//     //   <App />
//     // </React.StrictMode>
//     <Provider store={store}>
//       <App/>
//     </Provider>
//   );
// }