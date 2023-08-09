import React from 'react'

function EventHandling() {
    function clickHandler(){
        console.log('====================================');
        console.log("Button clicked");
        console.log('====================================');
    }

    function handleMouse(){
        console.log('====================================');
        console.log("mouse in ");
        console.log('====================================');
    }

    function handleMouseOut(){
        console.log('====================================');
        console.log("Mouse out");
        console.log('====================================');
    }
  return (

  <>
    <div className='flex flex-col items-center'>
      <button className='bg-red-400 shadow-xl py-2 rounded  px-12 m-4' onClick={clickHandler}>Click</button>
      <button className='bg-yellow-400 shadow-xl py-2 rounded px-12' onMouseEnter={handleMouse} onMouseOut={handleMouseOut}>Click</button>
    </div>
  </>

  )
}

export default EventHandling

// if write clickHandler as clickHandler() it will become function call

// class coponents
// import React, { Component } from "react";

// export default class EventHandling extends Component {
//   handleClick() {
//     console.log("====================================");
//     console.log("Button clicked");
//     console.log("====================================");
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click</button>
//       </div>
//     );
//   }
// }
