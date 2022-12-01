import { Routes, Route } from 'react-router-dom';
import DoLogin from './routes/login';
import CreateProject from './routes/createProject';
import CreateClientReview from './routes/createClientReview';
import CreateClientProfile from './routes/createClientProfile'; 
import React from 'react';
import ViewProject from './routes/ViewProject';
import ViewClientProfile from './routes/ViewClientProfile.js';
const Main = () => {
    return (
        <Routes>
        <Route path="/" element={<DoLogin />} />
        <Route path="/createProject" element={<CreateProject />} />
        <Route path="/createClientReview" element={<CreateClientReview/>} />
        <Route path="/viewProject" element={<ViewProject/>} />
        <Route path="/createClientProfile" element={<CreateClientProfile/>} />
        <Route path="/viewClientProfile" element={<ViewClientProfile/>} />
        </Routes>
    );
};

export default Main;