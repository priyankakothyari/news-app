import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {

    let {title, description, imageUrl,url} = this.props

    return <div className="my-3">
    
    <div className="card" style={{width: "18rem"}}>
    <img src={imageUrl?imageUrl:"https://i0.wp.com/hipertextual.com/wp-content/uploads/2022/02/Steam-Remote-Play-Anywhere-Lonely-Mountains-Downhill.jpg?fit=2000%2C1333&ssl=1"} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}...</h5>
      <p className="card-text">{description}...</p>
      <a href={url} target= "_blank" rel= "noreferrer"className="btn btn-sm btn-primary">Read more</a>
    </div>
  </div>
  </div>
  }
}

export default NewsItem;
