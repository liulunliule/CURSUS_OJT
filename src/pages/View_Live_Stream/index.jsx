import React, { useEffect, useState } from "react";
import "./index.scss";
import Eye from "../../assets/img/eye.png";
import Like from "../../assets/img/like_live.png";
import Dislike from "../../assets/img/dislike.png";
import Share from "../../assets/img/share_live.png";
import liveButton from "../../assets/img/live_button.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLiveStreams } from "../../redux/features/liveStreamsSlice";
import { fetchChatContent } from "../../redux/features/chatContentSlice";
import {
  addChatMessage,
  fetchLiveChat,
} from "../../redux/features/liveChatSlice";
import Carousel from "../../components/carousel";

const View_Live_Stream = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const account = useSelector((state) => state.user.account);
  const userName = account.userName;

  const liveStreams = useSelector((state) => state.liveStreams.liveStreams);
  const liveStreamsLoading = useSelector((state) => state.liveStreams.loading);

  // const chatContent = useSelector((state) => state.chatContent.chatContent);
  // const chatContentLoading = useSelector((state) => state.chatContent.loading);

  const chats = useSelector((state) => state.liveChat.chatContent);

  const handleSendMessage = () => {
    const newMessage = {
      userName: userName,
      message: message,
    };
    dispatch(addChatMessage(newMessage));
    setMessage(""); // Clear the input after sending the message
  };

  // useEffect(() => {
  //   dispatch(fetchLiveStreams());
  //   dispatch(fetchChatContent());
  //   dispatch(fetchLiveChat());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchLiveStreams());
    dispatch(fetchChatContent());

    // Polling every 5 seconds
    const interval = setInterval(() => {
      dispatch(fetchLiveChat());
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="fullPageWrap">
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="section3125">
                <div className="marginGap">
                  <div className="iframeHeight">
                    <iframe
                      src="https://www.youtube.com/embed/Ohe_JzKksvA"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen=""
                      style={{ width: "95%", height: "400px" }}
                    ></iframe>
                  </div>
                  <div className="user_section">
                    <div className="user_section_left">
                      <div className="live_user_sec">
                        <div className="user_image1">
                          <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg" />
                        </div>
                        <div className="user_content1">
                          <h4>Jassica William</h4>
                          <button className="subscribe_button">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="user_section_right">
                      <div className="icons-display">
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

            <div className="col-lg-4">
              <div className="martr">
                <div className="chat_box_section">
                  <div className="live_chat_title">
                    <h4>Live Chat</h4>
                  </div>
                  <div className="live_chat_content">
                    <div className="ongod">
                      {/* {chatContent.map((d) => (
                        <p>
                          <a href="#">{d.name}</a>
                          {d.content}
                        </p>
                      ))} */}
                      {chats.map((chat) => (
                        <div className="chat" key={chat.id}>
                          <p>
                            <span>{chat.userName}</span>
                            {chat.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="live_comment_section">
                    <input
                      class="live_input_stuff"
                      type="text"
                      placeholder="Say Something..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="live_button" onClick={handleSendMessage}>
                      <img src={liveButton} className="button-shit" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="section3125">
                <h4 className="item_title">Live Streams</h4>
                <Link to="/LiveStreams" className="see1500">
                  See all
                </Link>
                <div className="la5lo100">
                  <div className="owl-carousel live_stream owl-theme owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div className="owl-stage100">
                        {/* <Slider {...settings}>
                          {liveStreams.map((d) => (
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
                        </Slider> */}
                        <Carousel />
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
  );
};

export default View_Live_Stream;
