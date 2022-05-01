import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import 'antd/dist/antd.min.css';
import App from './App';
import Home from './pages';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
const Routing = () => {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/admin" element={<Home />} />
      </Routes>
    </Router>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
