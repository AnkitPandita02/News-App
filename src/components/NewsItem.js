import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, ImageUrl, NewsUrl} = this.props 
    return (
      <div className='my-3'>
            <div className="card">
                <img src={ImageUrl?ImageUrl:"https://repository-images.githubusercontent.com/247700168/52453000-67bc-11ea-9d9d-78d983660ba8"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={NewsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
