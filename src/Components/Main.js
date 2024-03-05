import React from "react";
import axios from "axios";
import navHook from "./nav";
import "./Styles/Main.css";
class Main extends React.Component{
    
    constructor(){
        super();
        this.state={
            movies:[]
        }
       
    }
    componentDidMount() {
        axios({
            url: 'http://localhost:3500/movie',
            method: 'GET',
            headers: { "Content-Type": 'application/JSON' }
        })
        .then(res => {
            console.log("movies:", res.data.movies); // Use res.data.movies to access the movies array
            this.setState({ movies: res.data.movies });
        })
        .catch(err => { console.log(err) });
    }
    
    // componentDidMount(){
    //     axios({
    //         url: 'http://localhost:3500/movie',
    //         method: 'GET',
    //         headers: {"Content-Type": 'application/JSON'}
    //     })
    //     .then(res=>{
    //         this.setState({movies: res.data.movie})
    //     })
    //     .catch(err=>{console.log(err)})
    // }

    // handleSignIn = () => {

    //     // Navigate to home page when Sign in button is clicked
    //     navigate('/path/to/navigate');
    // }

    handleSignIn = () =>{
        this.props.navigate(`/home`)
    }
    render(){
        const {movies}= this.state;
        
        return(
            
                <div>
                    
                    <div className="bg-image page1">
                        <div className="container">    
                            <img style={{height: "16%",width: "16%"}} src="../Images/580b57fcd9996e24bc43c529.png" alt="NETFLIX logo"/>
                            <div className="d-flex signin-block">
                                <i className="bi bi-globe globe"></i>
                                <select name="Language" id="Language">
                                    <option value="0" >English</option>
                                    <option value="1">हिन्दी</option>
                                </select>
                                <a className="btn btn-danger sign-in" onClick={this.handleSignIn}>Sign in</a>
                            </div>

                            <div className="d-flex">
                                {/* <!-- <input type="text" className="label" placeholder="Email address"> --> */}
                                <div className="form-floating ms-5">
                                <input type="email" className="form-control label2" id="floatingInput" placeholder="name@example.com" style={{color:"whitesmoke"}}/>
                                <label htmlFor="floatingInput"  id="floatlabel2">Email address</label>
                                
                                </div>
                                <button className="GetStarted"  onClick={this.handleSignIn}><b>Get Started <i className="bi bi-chevron-right arrow"></i></b></button>
                            </div>
                            
                            <span id="main_heading" className="d-flex justify-content-center">Unlimited movies,TV shows and more</span>
                            <span id="sub1_heading" className="d-flex justify-content-center">Watch anywhere. Cancel anytime.</span>
                            <span id="sub2_heading" className="d-flex justify-content-center">Ready to watch? Enter your email to create or restart your membership.</span>
                        </div>
                        <hr/>
                    </div>
                    
                    
                    <div className="page2">
                        <div className="container">
                            <div className="leftpart">
                                <h2>Enjoy on your TV</h2>
                                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                            </div>
                            <div className="rightpart">
                                <img src="../Images/tv.png" id="page2-img" alt=""/>
                            </div>
                            <div>
                                <video autoPlay muted loop id="page2-video" src="../videos/video-tv-in-0819.m4v"></video>
                            </div>
                        </div>
                    <hr/>
                    </div>


                    <div className="page3">
                        <div className="container">
                            <div className="page3-leftpart">
                                <h2>Download your shows to watch offline</h2>
                                <p>Save your favourites easily and always have something to watch.</p>
                            </div>
                            <div className="page3-rightpart">
                                <img id="page3-img" src="../Images/phone.jpg" alt="hello"/>
                                <div id="page3-dialogbox">
                                Stranger Things <br/>
                                <p>Downloading...</p>
                                <img id="page3-img2" src="../Images/boxshot.png" alt=""/>
                                <img id="page3-gif" src="../Images/download-icon.gif" alt=""/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>

                    <div className="page4">
                        <div className="container">
                            <div className="leftpart">
                            <h2>Watch everywhere</h2>
                            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                            </div>
                            <div className="rightpart">
                                <img src="../Images/device-pile-in.png" id="page4-img" alt=""/>
                                <video autoPlay muted loop id="page4-video" src="../videos/video-devices-in.m4v"></video>
                            </div>
                        </div>
                        <hr/>
                    </div>  
                

                    <div className="page5">
                        <div className="container">
                            <div className="page5-leftpart">
                                <h2>Create profiles for kids</h2>
                                <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership. </p>
                            </div>
                            <div className="rightpart">
                                <img id="page5-img" src="../Images/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png" alt=""/>
                            </div>
                        </div>
                        <hr/>
                    </div>


                    <div className="FAQ">
                        <div className="container">
                            <p className="d-flex justify-content-center FAQ-head"><b>Frequently Asked Questions</b></p>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed acc-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        What is Netflix?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse acc-body" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,    anime, documentaries and more - on thousands of internet-connected devices. 
                                    <br/><br/>
                                    You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                                    </div>
                                </div>
                                </div>
                                <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed acc-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        How much does Netflix cost?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse acc-body" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</div>
                                </div>
                                </div>
                                <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed acc-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Where can I watch?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse acc-body" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                    <br/><br/>
                                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                                    </div>
                                </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed acc-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseOne">
                                        How do I cancel?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse acc-body" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed acc-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        What can I watch on Netflix?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse acc-body" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed acc-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Is Netflix good for kids?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseSix" className="accordion-collapse collapse acc-body" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                                        <br/><br/>
                                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <span id="sub2_heading" className="d-flex justify-content-center">Ready to watch? Enter your email to create or restart your membership.</span>
                        <div className="d-flex">
                        {/* <!--/ <input type="text" className="label1" placeholder="Email address"> --> */}
                        <div className="form-floating ms-5">
                            <input type="email" className="form-control label1" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput"  id="floatlabel">Email address</label>
                            </div>
                        <button className="GetStarted1" onClick={this.handleSignIn}><b>Get Started <i className="bi bi-chevron-right arrow"></i></b></button>
                    </div>
                    <hr/>
                    </div>
                    <footer>
                        <div className="container">
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
                </div>
            
        )
    }
}
export default navHook(Main);