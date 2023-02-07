import React, { Component } from "react";

export class Newsitem extends Component {
    
  render() {
     let {title , desc , imageUrl,newsUrl , author, date} = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
             {desc}...
            </p>
            <p className="card-text">
             <small className="text-muted"> By {author} on {date}</small>
            </p>
            <a href={newsUrl}  className="btn btn-primary">
             Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
