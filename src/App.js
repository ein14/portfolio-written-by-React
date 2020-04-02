import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import logo from './logo.svg';
 import './App.css';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
