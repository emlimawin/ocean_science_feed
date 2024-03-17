import React from 'react';
import './assets/global.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';


const App = () => {
    return (
        <div className='App'>
          <Navbar />
          <Main />
          <Footer />
        </div>
    );
};

export default App;