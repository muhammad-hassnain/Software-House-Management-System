import { Routes, Route } from 'react-router-dom';
import DoLogin from './routes/login';
import CreateProject from './routes/createProject';
import CreateClientReview from './routes/createClientReview';
import React from 'react';

const Main = () => {
    return (
        <Routes>
        <Route path="/" element={<DoLogin />} />
        <Route path="/createProject" element={<CreateProject />} />
        <Route path="/createClientReview" element={<CreateClientReview/>} />
        </Routes>
    );
};

export default Main;