import React from 'react';
import ContactForm from './ContactForm';

class Footer extends React.Component{
  render(){
    return(
      <div className='contact-container'>
        <h3>お問い合わせ</h3>
        <ContactForm />
      </div>
    );
  }
}

export default Footer;