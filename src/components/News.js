import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // for smoothly scrolling
  });
};

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
      page: 1
    };
  }

  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=990548b9daa14b4a96a4b1be71852a66&page=1&pageSize=${this.props.pageSize}`
    )
    
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.articles,
            page: 1,
            totalResults:result.totalResults
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
      
    };

  

  handlePrevClick= async ()=>{
      fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=990548b9daa14b4a96a4b1be71852a66&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
      )
      this.setState({isLoaded:false})
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            page:this.state.page - 1,
            articles: result.articles,
          });
        },
      );
     

    }

    handleNextClick = async()=>{
                   if ( this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
                    }
                  else{
                    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=990548b9daa14b4a96a4b1be71852a66&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`)

                    .then((res) => res.json())
                    .then(
                      (result) => {
                        this.setState({
                          isLoaded: true,
                          page:this.state.page + 1,
                          articles: result.articles,
                        });
                      },
                    );
                  }
    }

      
    
  render() {
    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {"error accured"}</div>;
    } else if (!isLoaded) {
      return <div><Loading/></div>;
    } else {
      return (
        <div className="container">
          <h1 className="text-center">News - Top HeadLines</h1>
          <hr />
      
          <div className="row m-4">
            { this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
            <div className="d-flex justify-content-between m-4">
             
              <button disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-primary" >&laquo; previous</button>
               <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary"onClick={this.handleNextClick}  >next &raquo;</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default News;
