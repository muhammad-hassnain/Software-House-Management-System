import { Routes, Route } from 'react-router-dom';
import DoLogin from './routes/login';
import CreateProject from './routes/createProject';
import React from 'react';

const Main = () => {
    return (
        <Routes>
        <Route path="/" element={<DoLogin />} />
        <Route path="/createProject" element={<CreateProject />} />
        </Routes>
    );
};

export default Main;