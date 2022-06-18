import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import  Movies from '../components/Movies/Movies';
export const MakeMainRoutes = () => {
  return (<div><Router><Routes>
          <Route path="/" element={<Movies />} />
          </Routes>
        </Router></div>);
};


