import React, { Component } from 'react'
import Spinner from "./Spinner-5.gif"

const myStyle={
     width: "80vw",
     height:"80vh",

}
export class Loading extends Component {
  
  render() {
    return (
      <div style={myStyle} className='d-flex justify-content-center align-items-center m-5'>
        <img src={Spinner} alt="loading" />
      </div>
  
    )
  }
}

export default Loading