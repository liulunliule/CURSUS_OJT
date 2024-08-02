import React, { useEffect, useState } from 'react';
import "./index.scss";
import Bell from "../../assets/img/bell.png";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInstructorNotifications } from '../../redux/features/instructorNotificationsSlice';

const Instructor_Notification = () => {
    const [mouseOverColor, setMouseOverColor] = useState(null);

    const mouseOverOn = () => {
        setMouseOverColor("black");
    }

    const mouseOverOff = () => {
        setMouseOverColor(null);
    }

    const dispatch = useDispatch();
    const notification = useSelector((state) => state.instructorNotifications.instructorNotifications)
    const loading = useSelector((state) => state.instructorNotifications.loading);

    useEffect(() => {
        dispatch(fetchInstructorNotifications());
    }, [dispatch])

    const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

  return (
    <div className={`wrapper12 ${isShowAll ? "active" : ""}`}>
        <div className='sa4d25'>
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
                    <div className='setting-section mbt-30'>
                        <Link to="/setting_page/account_tab">
                        <button
                                style={{backgroundColor: mouseOverColor, marginBottom: 30}}
                                class="setting_noti"
                                onMouseOver={mouseOverOn}
                                onMouseOut={mouseOverOff}
                                >
                                Notification Setting
                                </button>
                        </Link>
                               
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
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Instructor_Notification