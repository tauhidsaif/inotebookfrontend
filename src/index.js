import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// // Step  1:
// app.use(express.static(path.resolve(__dirname, "../build")));
// // Step 2:
// app.get("*", function (req, res) {
//   res.sendFile(path.resolve(__dirname, "../build", "index.html"));
// });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
