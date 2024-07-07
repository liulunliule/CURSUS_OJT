import React from 'react';
import "./index.scss";
import Eye from "../../assets/img/eye.png";
import Like from "../../assets/img/like_live.png";
import Dislike from "../../assets/img/dislike.png";
import Share from "../../assets/img/share_live.png";
import liveButton from "../../assets/img/live_button.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";


const View_Live_Stream = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
      };

  return (
    <div className='fullPageWrap'>
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-8'>
                    <div className='section3125'>
                        <div className='marginGap'>
                            <div className='iframeHeight'>
                            <iframe src="https://www.youtube.com/embed/Ohe_JzKksvA" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style={{width:"95%", height: "400px"}}>
                            </iframe>
                            </div>
                            <div className='user_section'>
                                <div className='user_section_left'>
                                    <div className='live_user_sec'>
                                        <div className='user_image1'>
                                            <img src='https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg'/>
                                        </div>
                                        <div className='user_content1'>
                                            <h4>Jassica William</h4>
                                            <button className='subscribe_button'>Subscribe</button>

                                        </div>


                                    </div>

                                </div>

                                <div className='user_section_right'>
                                    <div className='icons-display'>
                                        <img className="margin-thingy" src={Eye} />
                                        <img src={Like} />
                                        <img src={Dislike} />
                                        <img src={Share} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='martr'>
                            <div className='chat_box_section'>
                                <div className='live_chat_title'>
                                    <h4>Live Chat</h4>
                                </div>
                                <div className='live_chat_content'>
                                    <div className='ongod'>
                                        {chat.map((d) => (
                                            <p>
                                                <a href='#'>{d.name}</a>
                                                {d.content}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className='live_comment_section'>
                                <input class="live_input_stuff" type="text" placeholder="Say Something..." />
                                <button className='live_button'>
                                    <img src={liveButton} className='button-shit'/>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-12'>
                    <div className="section3125">
                        <h4 className="item_title">Live Streams</h4>
                        <Link to="/LiveStreams" className="see1500">See all</Link>
                        <div className="la5lo100">
                            <div className="owl-carousel live_stream owl-theme owl-loaded owl-drag">
                            <div className="owl-stage-outer">
                                <div className="owl-stage100">
                                <Slider {...settings}>
                                    {data.map((d) => (
                                    <div className="owl-item">
                                        <div className="item">
                                        <div className="stream_1">
                                            <a href="#" className="stream_bg">
                                            <img src={d.img} />
                                            <h4>{d.name}</h4>
                                            <p>
                                                Live
                                                <span></span>
                                            </p>
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                    ))}
                                </Slider>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

const chat = [
    {
        name: "John Doe",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet molestie leo ac pellentesque"
    },
    {
        name: "Poonam",
        content: "Class aptent taciti sociosqu ad litora torquent per conubia nostra"
    },
    {
        name: "Jass",
        content: "Nulla sollicitudin nec nisi at pellentesque. Cras fringilla est et sem tempor"
    },
    {
        name: "Albert Smith",
        content: "Pellentesque ultricies risus sit amet congue euismod"
    },
    {
        name: "Jassica William",
        content: "Nullam efficitur tristique consequat"
    },
    {
        name: "Joy Dua",
        content: "Proin sed leo eleifend,"
    },
    {
        name: "Zoena Singh",
        content: "Aliquam dignissim elementum sem id rutrum"
    },
    {
        name: "Amritpal Singh",
        content: "Fusce a elit at libero sollicitudin tincidunt"
    },
    {
        name: "Johnson",
        content: "Ut laoreet lobortis ornare"
    },
    {
        name: "Jashan",
        content: "Sed pretium erat eu turpis condimentum"
    },
];

const data = [
    {
      name: "John Doe",
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg",
    },
    {
      name: "Jassica",
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg",
    },
    {
      name: "Edututs+",
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg",
    },
    {
      name: "Joginder",
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-8.jpg",
    },
    {
      name: "Zoena",
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg",
    },
    {
      name: "Albert Dua",
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-6.jpg",
    },
    {
      name: "Ridhima",
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg",
    },
    {
      name: "Amritpal",
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-8.jpg",
    },
    {
      name: "Jimmy",
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg",
    },
  ];

export default View_Live_Stream;