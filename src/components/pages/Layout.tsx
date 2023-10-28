


import React from 'react';
import Header from './Dashboard/index'; // Import your header component here

const Layout = ({ children }:any) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;