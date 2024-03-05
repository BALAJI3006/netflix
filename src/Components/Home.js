 import React from "react";
import "./Styles/home1.css"
import axios from "axios";
import navHook from "./nav";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
class Home extends React.Component{
    
    constructor(){
        super();
        this.state={
            movies:[],
            selectedMovie: {banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mYZIQsFRJxHB3-V4qFr-25A75mSktJzv3w",
                            id: '3',
                            path: "3.mp4",
                            ratings: "4.8",
                            synopsis: "Thor, the God of Thunder, defends Asgard and Earth from enemies.",
                            title: "Thor",title_img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAA",
                            _id: "650b2d6ec20efdc8b9a247f9"},           
        isVideoPlaying: false,
        inputText: "",
        suggestions: []
        }
    }
    
    componentDidMount(){
        axios({
            url: 'http://localhost:3500/movie',
            method: 'GET',
            headers: {"Content-Type": 'application/JSON'}
        })
        .then(res=>{
            this.setState({movies: res.data.movies})
        })
        .catch(err=>{console.log(err)})
    };


    handleMovieClick = (selectedMovie) => {

        this.setState({ selectedMovie,isVideoPlaying: false,inputText: false });
        
    };

    navigateMain = () =>{
        this.props.navigate(`/`)
    }
 
    playMovie = async (askedId, navigate) => {
        try {
          // Fetch the selected movie details by ID
         
          // Update the state with the selected movie if needed
          this.setState({ isVideoPlaying: true });
      
          // Use the navigate function to navigate to the movie details page
          
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
    };

    changeBackgroundImage = (imageUrl) => {
      this.setState({ backgroundImage: imageUrl });
    };
      

    
    handleInput = (event) => {
        const inputText = event.target.value;
        const { movies } = this.state;

        let suggestions = [];
        if (inputText) {
            suggestions = movies.filter(movie =>
                movie.title.toLowerCase().includes(inputText.toLowerCase())
            );
        }

        this.setState({ inputText, suggestions });
    }

    showSuggestions = () => {
        const { suggestions, inputText } = this.state;

        if (!inputText) {
            return null;
        }

        if (suggestions.length === 0) {
            return (
                <li> No Search Results Found </li>
            )
        }

        return (
            // suggestions.map((item) => (
            //     <li key={item.id} onClick={() => this.handleMovieClick(item)}>
            //         <img className='sugg_img' src={`${item.title_img}`} alt={item.title} />
            //         <span className='fw-bolder sugg_title'>{`${item.title}`}</span> <br />
            //         <span className='sugg_loca'>{`${item._id}`}</span> <hr className='sugg_line' />
            //     </li>
            // ))
            <div className="box">
                {suggestions.map((item)=>{
                    return(
                        <a href=""><img src={item.title_img} alt="" /></a>
                    )
                })}
            </div>
        );
    }


    render(){
        const {movies,selectedMovie,isVideoPlaying,backgroundImage,suggestions, }= this.state;
        const suggestionsVisible = !!suggestions.length;
        const inputText = this.state.inputText;
        return(
            
            <div>
                <div style={{backgroundColor:"black",
                                 position:"static"}}>
                        
                        {/* <div className="input-group mb-3" style={{width: '35%', height: '50px', marginLeft:"60%",marginTop:"1%"}}>
                                <i className="bi bi-search input-group-text"></i>
                                <input type="text" className="form-control" placeholder="Search for restaurants"  aria-label="Username" aria-describedby="basic-addon1"/>
                                <ul className='suggestion'>{this.showSuggestions()}</ul>
                        </div> */}
                        <nav class="main-nav">
                        <a onClick={() => this.navigateMain}><img src="../Images/580b57fcd9996e24bc43c529.png"  style={{height : "16%",
                                                                                                                        width : "16%",
                                                                                                                        marginTop:"-1%"
                                                                                                                        }} alt="Logo Image" /></a>
                            <a href="#home">Home</a>
                            <a href="#tvShows">TV Shows</a>
                            <a href="#movies">Movies</a>
                            <a href="#originals">Originals</a>
                            <a href="#recently">Recently Added</a>
                        
                            <div className="input-group mb-3" style={{width: '20%', height: '40px', marginLeft:"65%",marginTop:"-6%"}}>
                                <i className="bi bi-search input-group-text" style={{backgroundColor:"black",color:"white"}}></i>
                                <input type="text" className="form-control" style={{backgroundColor:"black",color:"white"}} placeholder="Search for movies" onChange={this.handleInput} aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>

                            <a href="#account" style={{
                                                position: "relative",
                                                top: '-52px',
                                                left: "1050px",
                                            }}>Account</a>
                        </nav>
                    </div>
            {!inputText && (
                <div>
                    {movies.map((item)=>{
                                    return(
                                        console.log(item.title)
                                    )
                                })}
                  {console.log("sm:",selectedMovie)}
                  {console.log("suggestions:",suggestions)}
                    
                    {/* <br/><br/><br/><br/> */}
                            
                            
                        
                  
                    {/* <!-- END OF HEADER -->
                    <!-- DISPLAY --> */}
                    {/* <div className="home-container" style={{ backgroundImage: `url(${selectedMovie ? selectedMovie.banner : 'https://assets.ccbp.in/frontend/react-js/movies-app/avatar-theatrical-movie-background-v0.png'})`,position:"absolute", backgroundSize: "cover"}}>
                    {selectedMovie && (
                        <div>
                            <h1>Video Player</h1>
                            <video width="1280" height=""  controls>
                            <source
                                src={`http://localhost:3500/movie/${selectedMovie._id}`}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                    <div className="home-movie-details-container">
                        <h1 className="home-movie-heading">{selectedMovie ? selectedMovie.title : 'Avatar'}</h1>
                        <p className="home-movie-description">{selectedMovie ? selectedMovie.synopsis : 'Avatar is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron'}</p>
                        <button type="button" className="home-movie-play-button" onClick={() => this.playMovie(selectedMovie ? selectedMovie._id : '')}>
                        Play
                        </button>
                    </div>
                    </div> */}
                    <div className="home-container" style={{ backgroundImage: `url(${
                        isVideoPlaying ? '' : backgroundImage || (selectedMovie ? selectedMovie.banner : 'https://assets.ccbp.in/frontend/react-js/movies-app/avatar-theatrical-movie-background-v0.png')
                    })`, backgroundSize: "cover" }}>
                    <div className="home-movie-details-container">
                        {/* Conditional rendering based on whether the video is playing */}
                        {isVideoPlaying ? (
                            <div>
                                <video width="1280" height="625" autoPlay style={{ position: "absolute",
                                                                          top: "12%",
                                                                          left:" 0px",
                                                                    }} controls>
                                <source src={`http://localhost:3500/movie/${selectedMovie?._id}`} type="video/mp4" />
                                Your browser does not support the video tag.
                                </video>
                            </div>
                            ) : (
                            <div>
                                <h1 className="home-movie-heading">{selectedMovie?.title}</h1>
                                <p className="home-movie-description">{selectedMovie?.synopsis}</p>
                                <button type="button" className="home-movie-play-button" onClick={() => this.playMovie(selectedMovie?._id)}>
                                Play
                                </button>
                            </div>
                            )}
                    </div>
                    </div>
                    

                    {/* 
                    <!-- END OF DISPLAY -->
                    
                    <!-- MAIN CONTAINER --> */}

                    <section className="main-container" style={{marginTop:"-3.5%",}}>
                        <div className="location"  id="home">
                            <h1 id="home">Popular on Movies App</h1><br/>
                            <div className="box" style={{overflowX: "scroll"}}>
                            {/* {movies.map((item)=>{
                                    return(
                                        <a href=""><img src={item.title_img} alt="" /></a>
                                    )
                                })} */}
                            {movies.map((item) => (
                                <a key={item.id} href="#" onClick={() => this.handleMovieClick(item)}>
                                <img src={item.title_img} alt="" />
                                </a>
                            ))}
                            </div>
                        </div>

                        <h1 id="myList">Trending Now</h1><br/>
                        <div className="box">
                        {movies.map((item)=>{
                                    return(
                                        <a href=""><img src={item.title_img} alt="" /></a>
                                    )
                                })}
                        </div>

                        <h1 id="tvShows">TV Shows</h1><br/>
                        <div className="box">
                        {movies.map((item)=>{
                                    return(
                                        <a href=""><img src={item.title_img} alt="" /></a>
                                    )
                                })}
                        </div>

                        <h1 id="originals">Originals</h1><br/>
                        <div className="box">
                        {movies.map((item)=>{
                                    return(
                                        <a href=""><img src={item.title_img} alt="" /></a>
                                    )
                                })}
                        </div>

                        <h1 id="recently">Recently added</h1><br/>
                        <div className="box">
                        {movies.map((item)=>{
                                    return(
                                        <a href=""><img src={item.title_img} alt="" /></a>
                                    )
                                })}
                        </div>
                    </section>
                    {/* <!-- FOOTER --> */}
                    
                    <footer>
                        <div className="container" id="account">
                            <div>Questions? Call <a href="">000-800-919-1694</a></div>
                            <br/>  
                            <div className="row">
                                <div className="col-4"><a href="">FAQ</a></div>
                                <div className="col-4"><a href="">Help Center</a></div>
                                <div className="col-4"><a href="">Account</a></div>
                            </div>
                            <div className="row">
                                <div className="col-4"><a href="">Media Center</a></div>
                                <div className="col-4"><a href="">Investor Relations</a></div>
                                <div className="col-4"><a href="">Jobs</a></div>
                            </div>
                            <div className="row">
                                <div className="col-4"><a href="">Ways to Watch</a></div>
                                <div className="col-4"><a href="">Terms of Use</a></div>
                                <div className="col-4"><a href="">Privacy</a></div>
                            </div>
                            <div className="row">
                                <div className="col-4"><a href="">Cookie Preferences</a></div>
                                <div className="col-4"><a href="">corporate Information</a></div>
                                <div className="col-4"><a href="">Contact Us</a></div>
                            </div>
                            <div className="row">
                                <div className="col-4"><a href="">Speed Test</a></div>
                                <div className="col-4"><a href="">Legal Notices</a></div>
                                <div className="col-4"><a href="">Only on Netflix</a></div>
                            </div>
                        </div>
                        <br/>
                        <div className="d-flex foot-lang">
                            <i className="bi bi-globe globe"></i>
                            <select name="Language" id="Language">
                            <option value="0">English</option>
                            <option value="1">हिन्दी</option>
                            </select> 
                        </div>
                        <br/>
                        <div className="ms-4">Netflix India</div>
                    </footer>
                       </div>)
                    }
                    {inputText && suggestionsVisible && (
                        <div>
                            {suggestions.map((item, index) => (
                                <a style={{flexDirection:"row"}} key={index} >
                                    <a  onClick={() => this.handleMovieClick(item)}> {item.title} ,</a>
                                </a>
                            ))}
                            <br/><br/>
                            <div className="box">
                                {suggestions.map((item, index) => (
                                    <a key={index} href="#" onClick={() => this.handleMovieClick(item)}>
                                        <img src={item.title_img} alt={item.title} />
                                    </a>
                                ))}
                            </div>
                        </div>
                )}
                </div>
             
                  
        )
    }
}
export default Home;