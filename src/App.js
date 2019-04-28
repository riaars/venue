import React from 'react';
import './resources/styles.css';
import Header from './component/header_footer/Header';
import Featured from './component/featured';
function App() {
  return (
    <div className="App" style={{height: '3000px', backgroundColor: '#efefef'}}>
      <Header />
      <Featured />
    </div>
  );
}

export default App;
