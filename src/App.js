import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div className='App'>
      <Navbar />
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </div>
  )
}

export default App