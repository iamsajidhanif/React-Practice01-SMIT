
import React from 'react';
import { Routes as AppRoutes, Route, Link } from 'react-router';
import Home from '../components/Home';
// import About from '../components/About/About';
// import Invoice from '../components/Invoice/Invoice';

const Routes = () => {
  return (
    <AppRoutes>
      <Route path='/' element={<Home />} />
      {/* <Route path='about' element={<About />} /> */}

      {/* dynamic segments */}
      {/* <Route path='invoices/:invoiceId' element={<Invoice />} /> */}
    </AppRoutes>
  );
};

export default Routes;
