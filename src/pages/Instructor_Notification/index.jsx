import React, { useState } from 'react';
import "./index.scss";
import Bell from "../../assets/img/bell.png";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Instructor_Notification = () => {
    const [mouseOverColor, setMouseOverColor] = useState(null);

    const mouseOverOn = () => {
        setMouseOverColor("black");
    }

    const mouseOverOff = () => {
        setMouseOverColor(null);
    }
    const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

  return (
    <div className={`wrapper12 ${isShowAll ? "active" : ""}`}>
        <div className='sa4d25_sa'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h2 className='noti-title'>
                            <img src={Bell} className=''/>
                            Notifications
                        </h2>
                    </div>
                </div>

                <div className='row'>
                    <div className='setting-section'>
                        <Link to="/setting_page/account_tab">
                        <button
                                style={{backgroundColor: mouseOverColor}}
                                class="setting_noti"
                                onMouseOver={mouseOverOn}
                                onMouseOut={mouseOverOff}
                                >
                                Notification Setting
                                </button>
                        </Link>

                                <div className='message_back mart-30'>
                                            <div className='panel_stuff'>
                                                <div className='profile_show'>
                                                    <img src='https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg' alt='photo'/>
                                                    <div className='content_show'>
                                                        <h6>Rock William</h6>
                                                        <p>Like Your Comment On Video <strong>How To Create Sidebar Menu</strong>.</p>
                                                        <span className='time_ago'>2 min ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                               
                                    {notification.map((d) => (
                                        <div className='message_back'>
                                            <div className='panel_stuff'>
                                                <div className='profile_show'>
                                                    <img src={d.img} alt='photo'/>
                                                    <div className='content_show'>
                                                        <h6>{d.name}</h6>
                                                        <p>{d.content} <strong>{d.strong}</strong></p>
                                                        <span className='time_ago'>{d.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className='message_back mbt-30'>
                                            <div className='panel_stuff'>
                                                <div className='profile_show'>
                                                    <img src='https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg' alt='photo'/>
                                                    <div className='content_show'>
                                                        <h6></h6>
                                                        <p>Your Course Approved Now. <strong>How To Create Sidebar Menu</strong>.</p>
                                                        <span className='time_ago'>20 min ago</span>
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

const notification = [
    {
        img: 'https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg',
        name: 'Jassica Smith',
        content: 'Added New Review In Video',
        strong: 'Full Stack PHP Developer',
        time: '12 min ago'
    },
    {
        img: 'https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg',
        name: '',
        content: 'Your Membership Activated',
        strong: '',
        time: '20 min ago'
    },
]

export default Instructor_Notification