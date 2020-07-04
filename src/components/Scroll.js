import React from 'react';

const Scroll = (props) => {
  console.log('Scroll');
  return (
    <div style={{ overflow: 'auto', border: '5px solid black', height: '600px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;
