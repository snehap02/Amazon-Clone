import React from 'react';
import './App.css';
import Header from './Header';
import SubHeader from './SubHeader';
import Home from './Home';

function App() {
  return (
    <div className="App w-full min-h-[100vh]">
      {/* <h1 className='text-center'>hello</h1> */}
      {/* header */}
      <Header/>
      <SubHeader/>
      {/* home */}
      <Home/>
    </div>
  );
}

export default App;
