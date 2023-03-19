import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Incidents from '../Pages/Incidents';

const RouteResolver: React.FC = () => (
    <Routes>
        <Route path='/' element={<Incidents />} />
    </Routes>
);

export default RouteResolver;
