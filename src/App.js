import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ContactForm from './ContactForm';
// import logo from './logo.svg';
 import './App.css';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Main />
        <Footer />
        <ContactForm />
      </div>
    );
  }
}

export default App;
