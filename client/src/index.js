import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes, Switch, Link } from 'react-router-dom';
import AddUser from './AddUser';
import FindUser from './FindUser';
ReactDOM.render(<BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
            <Route path="adduser" element={<AddUser />} />
            <Route path="finduser" element={<FindUser />} />
        </Route>
    </Routes>
</BrowserRouter>, document.getElementById('root'));
