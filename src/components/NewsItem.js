import PropTypes from 'prop-types'

const NewsItem =(props)=>  {


    let {title, description, ImageUrl, NewsUrl, author, date, source,} = props 
    return (
      <div className='my-3'>
            <div className="card"  >
              <div>
              <span className=" badge rounded-pill bg-primary" style={{display:"flex", position:"absolute", justifyContent:"end"}}>
                          {source}
                        </span>
                        </div>
                <img src={ImageUrl?ImageUrl:"https://repository-images.githubusercontent.com/247700168/52453000-67bc-11ea-9d9d-78d983660ba8"} className="card-img-top" alt="..."/>
                <div className="card-body"  >
                    <h5 className="card-title">{title}...
                        
                    </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
                    <a href={NewsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
      </div>
    )
}


export default NewsItem
