import React from "react";
import "./index.scss";
import iconSearchExplore from "../../assets/img/iconSearch_Explore.png";
import { Link } from "react-router-dom";
import Carousel from "../../components/carousel";
import BodyExplorePage from "../../components/bodyExplorePage";
import { LoadingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function ExplorePage() {
    const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

    return (
        <div>
            <div className={`explore_page ${isShowAll ? "active" : ""}`}>
                <div className="explore_page__wrapper_search">
                    <img
                        className="iconSearch"
                        src={iconSearchExplore}
                        alt=""
                    />
                    <input
                        className="inputForSearch"
                        type="text"
                        placeholder="Search for Tuts Videos, Tutors, Tests and more.."
                    />
                </div>
                <div className="explore_page__wrapper_showLive">
                    <div className="show_title">
                        <h4 className="title">Live Streams</h4>
                        <Link to="/LiveStreams" className="link_See_all">
                            See all
                        </Link>
                    </div>
                    <div className="carousel">
                        <Carousel />
                    </div>
                </div>
                <div className="bodyExplorePage">
                    <BodyExplorePage />
                    <LoadingOutlined className="loadMore" />
                </div>
            </div>
        </div>
    );
}

export default ExplorePage;
