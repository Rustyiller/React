import React from 'react';
import { useLax } from 'use-lax';
import Header from './components/Header';
import Idea from './components/Idea';
import Metodologies from './components/Metodologies';
import Creators from './components/Creators';


function App() {
  useLax();
  
  return (
    <div className="App">
      <Header />
      <Idea />
      <Metodologies />
      <Creators />
    </div>
  );
}

export default App;
