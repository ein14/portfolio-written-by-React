import React from 'react';
import Item from './Item';


class Main extends React.Component{
  render(){
    const plofile = [
      {
      name: 'ein14',
      introduction:'理系単科大学４年次'
    },
    {
      name:'language',
      introduction:'HTML,CSS,Javascript'
    },
  ];

    return(
      <div className='main-wrapper'>
        <div className='main'>
          <h1>Welcome to my portfolio</h1>
        </div>
        <h2>About Me</h2>
        {plofile.map((plofileItem) => {
          return(
            <Item 
              name = { plofileItem.name }
              introduction = { plofile.introduction }
              />
          );
        }) }
      </div>
    );
  }
}

export default Main;