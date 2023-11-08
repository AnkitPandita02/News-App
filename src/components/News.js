import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
        country : 'in',
        pageSize : 15,
        category : 'general'
    }

        static propTypes = {
            country : PropTypes.string,
            pageSize: PropTypes.number,
            category: PropTypes.string,
        }

    constructor(){
        super()
        this.state = {
            articles : [],
            loading : false,
            page : 1,

        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=38a6d406b8974e3c970632fd5bdf9e3e&page=1&pagesize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({articles: parseData.articles, 
                        totalResults : parseData.totalResults,
                        loading : false})
    }

    handelNext = async ()=>{
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

        }
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=38a6d406b8974e3c970632fd5bdf9e3e&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            page : this.state.page + 1,
            articles: parseData.articles,
            loading : false
        })
    }

    handelPrev = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=38a6d406b8974e3c970632fd5bdf9e3e&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            page : this.state.page - 1,
            articles: parseData.articles,
            loading : false
        })
    }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">TOP - HEADLINES</h1>
        {this.state.loading && <Spinner/>}
        <div className='row'>
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                <NewsItem title = {element.title?element.title.slice(0, 40): ""} description = {element.description?element.description.slice(0, 80): ""} ImageUrl = {element.urlToImage} NewsUrl = {element.url}/>
                </div>
            })}
            
        </div>
        <div className='container d-flex justify-content-around'>
        <button disabled = {this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handelPrev}> &larr; Prev</button>
        <button disabled = {(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-primary" onClick={this.handelNext}>Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}


