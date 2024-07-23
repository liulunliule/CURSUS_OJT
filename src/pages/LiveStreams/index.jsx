import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Stream from "../../assets/img/stream.png";
import { fetchLiveStreams } from '../../redux/features/liveStreamsSlice';
import { useDispatch, useSelector } from 'react-redux';

const LiveStreams = () => {
    const [mouseOverColor, setMouseOverColor] = useState(null);

    const mouseOverOn = () => {
        setMouseOverColor("black");
    };

    const mouseOverOff = () => {
        setMouseOverColor(null);
    };

    const dispatch = useDispatch();
    const liveStreams = useSelector((state) => state.liveStreams.liveStreams)

    useEffect(() => {
        dispatch(fetchLiveStreams());
    })

    const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
    return (
        <div className={`wrapper12 ${isShowAll ? "active" : ""}`}>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="right_side">
                            <div className="col-xl-9 col-lg-8">
                                <div className="section3125">
                                    <h4 className="item_title">
                                        All Live Streams
                                    </h4>
                                    <div className="la5lo2">
                                        <div className="row">
                                            {liveStreams.map((d) => (
                                                <div className="col-md-3">
                                                    <div className="stream_1 mb-4">
                                                        <Link
                                                            to="/view_live_streams"
                                                            className="stream_bg"
                                                        >
                                                            <img src={d.img} />
                                                            <h4>{d.name}</h4>
                                                            <p>
                                                                Live
                                                                <span></span>
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}

                                            <div className="col-md-12 mt-10">
                                                <div className="spinner">
                                                    <div className="bounce1"></div>
                                                    <div className="bounce2"></div>
                                                    <div className="bounce3"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4">
                                <div className="fcrse_11 mt-20">
                                    <div className="cater_ttle">
                                        <h4>Live Streaming</h4>
                                    </div>
                                    <div className="live_text">
                                        <div className="live_icon">
                                            <img src={Stream} />
                                        </div>
                                        <div class="live-content">
                                            <p>
                                                Set up your channel and stream
                                                live to your students
                                            </p>
                                            <Link to="/Add_Live_Stream">
                                                <button
                                                    style={{
                                                        backgroundColor:
                                                            mouseOverColor,
                                                    }}
                                                    class="live_link"
                                                    onMouseOver={mouseOverOn}
                                                    onMouseOut={mouseOverOff}
                                                >
                                                    Get Started
                                                </button>
                                            </Link>
                                            <span class="livinfo">
                                                Info : This feature only for
                                                'Instructors'.
                                            </span>
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

export default LiveStreams;
