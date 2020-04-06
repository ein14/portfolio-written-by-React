import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
      hasEmailError: false,
      content: '',
      hasContentError: false,
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }

  handleContentChange(event){
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      content: inputValue,
      hasContentError: isEmpty
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();
    if (this.state.email === '') return
    if (this.state.content === '') return

    this.setState({isSubmitted: true});
  }

  renderContactForm() {
    if (this.state.isSubmitted) {
      return (
        <div className='contact-submit-message'>
          送信完了
        </div>
      );
    }

    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className='contact-message-error'>
          メールアドレスを入力してください
        </p>
      );
    }
    
    let contentErrorText;
    if(this.state.hasContentError){
      contentErrorText = (
        <p className='contact-message-error'>
          お問い合わせ内容を入力してください
        </p>
        )
    }
    
    return (
      <form onSubmit={this.handleSubmit.bind(this)} >
        <p>メールアドレス（必須）</p>
        <input
          value={this.state.email}
          onChange={(event) => {this.handleEmailChange(event)}}
        />
        {emailErrorText}
        <p>お問い合わせ内容（必須）</p>
        <textarea  value={this.state.content}
                    onChange={(event) => {this.handleContentChange(event)}}  
        />
        {contentErrorText}
        
        <input
          type='submit'
          value='送信'
        />
      </form>
    );
  }

  render() {    
    return (
      <div className='contact-form'>
        {this.renderContactForm()}
      </div>
    );
  }
}

export default ContactForm;
