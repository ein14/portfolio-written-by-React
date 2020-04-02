import React from 'react';

class Item extends React.Component{
  constructor(props){
    super(props);
    this.state = {isModalOpen: false}; 
  }

  handleClickLesson(){
    this.setState({isModalOpen: true});
  }

  handleClickClose(){
    this.setState({isModalOpen: false});
  }


  render(){
    let modal;
    if(this.state.isModalOpen){
      modal = (
        <div className='modal'>
          <div className='modal-innner'>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button
            className='modal-close-btn'
            onClick={() => {this.handleClickClose()}}
            >
              閉じる
            </button>
          </div>
        </div>
      )
    }
    return(
      <div className='lesson-card'>
        <div
         className='lesson-item'
         onclick={() => {this.handleClickLesson()}}
         >
           <p>{this.props.name}</p>
         </div>
         {modal}
      </div>
    );
  }
}

export default Item;