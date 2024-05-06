import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {

  const [openSidebar,setOpenSidebar] = useState(true);

  const closeSidebar = () => setOpenSidebar(false);

  return (
    <div className="min-h-screen w-full dark:bg-gray-900">
      <Sidebar show={openSidebar} onClose={closeSidebar}></Sidebar>    
      <main className={`transition-all ease-linear duration-300 ${openSidebar ? "ml-0 md:ml-72"  : "ml-0" }`}>
        <Header toggleSidebar={() => setOpenSidebar(curr => !curr)}></Header>
        
        </main>  
    </div>
  );
}

export default App;
