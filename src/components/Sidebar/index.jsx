//SidebarFrontend
import React from "react";
import {
  HomeLogo_SideBar,
  LiveStreamLogo_SideBar,
  ExploreLogo_SideBar,
  CategoriesLogo_SideBar,
  TestsLogo_SideBar,
  SavedCoursesLogo_SideBar,
  PagesLogo_SideBar,
  DropDownLogo_SideBar,
  AddInstructorLogo_SideBar,
  SettingLogo_SideBar,
  HelpLogo_SideBar,
  ReportHistoryLogo_SideBar,
  SendFeedbackLogo_SideBar,
} from "../../assets";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//SideBarInstructorDashboardDemo
import {
  UilApps,
  UilBookAlt,
  UilAnalysis,
  UilPlusCircle,
  UilComments,
  UilBell,
  UilAward,
  UilStar,
  UilDollarSign,
  UilWallet,
  UilFileAlt,
  UilCheckCircle,
  UilCog,
  UilCommentAltExclamation,
} from "@iconscout/react-unicons";
function SidebarFrontend() {
  const account = useSelector((state) => state.user.account);
  const userId = account.id || "";
  const role = account.role;
  console.log("role: ", account.role);
  const subscriptions = useSelector((state) => state.myProfile.subscriptions);
  const chanelSubscription = subscriptions.filter(
    (post) => post.userId === userId && post.registered === true
  );
  const navigate = useNavigate();
  console.log("chanelSubscription: ", chanelSubscription);
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

  return (
    <div className={`SideBarFrontend ${isShowAll ? "active" : ""}`}>
      <div className="select_Side1">
        <Link className="Link_SideBar" to="/">
          <div className="select_Home">
            <img className="HomeLogo_SideBar" src={HomeLogo_SideBar} alt="" />
            <span className="select_Home__title">Home</span>
          </div>
        </Link>
        <Link className="Link_SideBar" to="/LiveStreams">
          <div className="select_LiveSteam">
            <img
              className="LiveStreamLogo_SideBar"
              src={LiveStreamLogo_SideBar}
              alt=""
            />
            <span className="select_LiveSteam__title">Live Streams</span>
          </div>
        </Link>
        <Link className="Link_SideBar" to="/explore_page">
          <div className="select_Explore">
            <img
              className="ExploreLogo_SideBar"
              src={ExploreLogo_SideBar}
              alt=""
            />
            <span className="select_Explore__title">Explore</span>
          </div>
        </Link>
        <details>
          <summary className="select_Categories">
            <div className="wrapperCategories">
              <img
                className="CategoriesLogo_SideBar"
                src={CategoriesLogo_SideBar}
                alt=""
              />
              <span className="select_Explore__title">Categories</span>
            </div>
            <img
              className="DropDownLogo_SideBar"
              src={DropDownLogo_SideBar}
              alt=""
            />
          </summary>
          <div className="List_Select_Categories">
            <ul className="Ul_List_Select_Categories_SideBar">
              <li className="Li_List_Select_Categories_SideBar">
                <Link className="Link_SideBar" to="/all_categories_page">
                  Development
                </Link>
              </li>
              <li className="Li_List_Select_Categories_SideBar">
                <Link className="Link_SideBar" to="/all_categories_page">
                  Business
                </Link>
              </li>
              <li className="Li_List_Select_Categories_SideBar">
                <Link className="Link_SideBar" to="/all_categories_page">
                  Finance & Accounting
                </Link>
              </li>
              <li className="Li_List_Select_Categories_SideBar">
                <Link className="Link_SideBar" to="/all_categories_page">
                  IT & Software
                </Link>
              </li>
              <li className="Li_List_Select_Categories_SideBar">
                <Link className="Link_SideBar" to="/all_categories_page">
                  Office Productivity
                </Link>
              </li>
              <li className="Li_List_Select_Categories_SideBar">
                <Link className="Link_SideBar" to="/all_categories_page">
                  Personal Development
                </Link>
              </li>
              <li className="Li_List_Select_Categories_SideBar">
                <Link className="Link_SideBar" to="/all_categories_page">
                  Design
                </Link>
              </li>
              <li className="Li_List_Select_Categories_SideBar">
                <Link className="Link_SideBar" to="/all_categories_page">
                  Marketing
                </Link>
              </li>
              <li className="Li_List_Select_Categories_SideBar">
                <Link className="Link_SideBar" to="/all_categories_page">
                  Lifestyle
                </Link>
              </li>
              <li className="Li_List_Select_Categories_SideBar">
                <Link className="Link_SideBar" to="/all_categories_page">
                  Photography
                </Link>
              </li>
              <li className="Li_List_Select_Categories_SideBar">
                <Link className="Link_SideBar" to="/all_categories_page">
                  Health & Fitness
                </Link>
              </li>
              <li className="Li_List_Select_Categories_SideBar">
                <Link className="Link_SideBar" to="/all_categories_page">
                  Music
                </Link>
              </li>
              <li className="Li_List_Select_Categories_SideBar">
                <Link className="Link_SideBar" to="/all_categories_page">
                  Teaching & Academics
                </Link>
              </li>
            </ul>
          </div>
        </details>
        <details>
          <summary className="select_Tests">
            {role === true || role === false ? (
              <>
                <div className="wrapperTests">
                  <img
                    className="TestsLogo_SideBar"
                    src={TestsLogo_SideBar}
                    alt="Tests Logo"
                  />
                  <span className="select_Tests__title">Tests</span>
                </div>
                <img
                  className="DropDownLogo_SideBar"
                  src={DropDownLogo_SideBar}
                  alt="Drop Down Logo"
                />
              </>
            ) : role === "" ? (
              <Link className="Link_SideBar" to="/Login">
                <div className="wrapperTests">
                  <img
                    className="TestsLogo_SideBar"
                    src={TestsLogo_SideBar}
                    alt="Tests Logo"
                  />
                  <span className="select_Tests__title">Tests</span>
                </div>
              </Link>
            ) : null}
          </summary>

          <div className={role === "" ? "hidden-content" : "List_Select_Tests"}>
            <ul className="Ul_List_Select_Tests_SideBar">
              <li className="Li_List_Select_Tests_SideBar">
                <Link
                  className="Link_SideBar"
                  to="/secondLayout/certification_center"
                >
                  Certification Center
                </Link>
              </li>
              <li className="Li_List_Select_Tests_SideBar">
                <Link
                  className="Link_SideBar"
                  to="/secondLayout/certification_fill_form"
                >
                  Certification Fill Form
                </Link>
              </li>
              <li className="Li_List_Select_Tests_SideBar">
                <Link
                  className="Link_SideBar"
                  to="/secondLayout/Certification_test_page"
                >
                  Test View
                </Link>
              </li>
              <li className="Li_List_Select_Tests_SideBar">
                <Link
                  className="Link_SideBar"
                  to="/secondLayout/Certification_test_result"
                >
                  Test Result
                </Link>
              </li>
              {role === true ? (
                <>
                  <li className="Li_List_Select_Tests_SideBar">
                    <Link
                      className="Link_SideBar"
                      to="/thirdlayout/my_certificates"
                    >
                      My Certification
                    </Link>
                  </li>
                </>
              ) : role === false ? (
                <li className="Li_List_Select_Tests_SideBar">
                  <Link
                    className="Link_SideBar"
                    to="/fourlayout/my_certificates"
                  >
                    My Certification
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </details>

        {role === true || role === false ? (
          <Link className="Link_SideBar" to="/saved_courses">
            <div className="select_SavedCourses">
              <img
                className="SavedCoursesLogo_SideBar"
                src={SavedCoursesLogo_SideBar}
                alt=""
              />
              <span className="select_SavedCourses__title">Saved Courses</span>
            </div>
          </Link>
        ) : role === "" ? (
          <Link className="Link_SideBar" to="/Login">
            <div className="select_SavedCourses">
              <img
                className="SavedCoursesLogo_SideBar"
                src={SavedCoursesLogo_SideBar}
                alt=""
              />
              <span className="select_SavedCourses__title">Saved Courses</span>
            </div>
          </Link>
        ) : null}
        <details>
          <summary className="select_Pages">
            <div className="wrapperPages">
              <img
                className="PagesLogo_SideBar"
                src={PagesLogo_SideBar}
                alt=""
              />
              <span className="select_Pages__title">Pages</span>
            </div>
            <img
              className="DropDownLogo_SideBar"
              src={DropDownLogo_SideBar}
              alt=""
            />
          </summary>
          <div className="List_Select_Pages">
            <ul className="Ul_List_Select_Pages_SideBar">
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/secondLayout/about">
                  About
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/login">
                  Sign In
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/signupstep">
                  Sign Up Steps
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link
                  className="Link_SideBar"
                  to="/secondLayout/paid_membership_page"
                >
                  Paid Membership
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link
                  className="Link_SideBar"
                  to="/course_detail/course_detail_about"
                >
                  Course Detail View
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/secondLayout/checkout_page">
                  Checkout
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/invoice_page">
                  Invoice
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/secondLayout/careers">
                  Career
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/secondLayout/apply-job">
                  Job Apply
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/secondLayout/blog">
                  Our Blog
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/secondLayout/blog-detail">
                  Blog Detail View
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/secondLayout/company">
                  Company Details
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/secondLayout/press">
                  Press
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar">Live Stream View</Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar">Add live Stream</Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link
                  className="Link_SideBar"
                  to="/secondLayout/search_results_page"
                >
                  Search Result
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/thanks_page">
                  Thank You
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/coming-soon">
                  Coming Soon
                </Link>
              </li>
              <li className="Li_List_Select_Pages_SideBar">
                <Link className="Link_SideBar" to="/error_page">
                  Error 404
                </Link>
              </li>
            </ul>
          </div>
        </details>
      </div>
      <div className="select_Side2">
        <div className="wrapper_select_Title">
          <span className="select_Title">SUBSCRIPTIONS</span>
        </div>
        <div className="select_ListAvatar">
          {chanelSubscription.map((subscription) => (
            <div
              className="Link_SideBar"
              key={subscription.id}
              onClick={() =>
                navigate(`/other_instructor_view/${subscription.id}`)
              }
            >
              <div className="wrapper_avatar1_SideBar">
                <img
                  className="avatar1_SideBar"
                  src={subscription.userImage}
                  alt=""
                />
                <span className="nameOfAvatar1_SideBar">
                  {subscription.user}
                </span>
                <span className="redDot_Avatar_SideBar"></span>
              </div>
            </div>
          ))}
          <Link to="/all_instructor" className="Link_SideBar">
            <div className="addInstructor_SideBar">
              <img
                className="AddInstructorLogo_SideBar"
                src={AddInstructorLogo_SideBar}
                alt=""
              />
              <span className="AddInstructor__title">Browse Instructors</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="select_Side3">
        {role === true || role === false ? (
          <Link to="/setting_page/account_tab" className="Link_SideBar">
            <div className="wrapper_SupportFunction_Setting_SideBar">
              <img
                className="SettingLogo_SideBar"
                src={SettingLogo_SideBar}
                alt=""
              />
              <span className="Setting_Title">Setting</span>
            </div>
          </Link>
        ) : role === "" ? (
          <Link className="Link_SideBar" to="/Login">
            <div className="wrapper_SupportFunction_Setting_SideBar">
              <img
                className="SettingLogo_SideBar"
                src={SettingLogo_SideBar}
                alt=""
              />
              <span className="Setting_Title">Setting</span>
            </div>
          </Link>
        ) : null}
        <Link className="Link_SideBar" to="/help">
          <div className="wrapper_SupportFunction_Help_SideBar">
            <img className="HelpLogo_SideBar" src={HelpLogo_SideBar} alt="" />
            <span className="Help_Title">Help</span>
          </div>
        </Link>
        {role === true || role === false ? (
          <Link className="Link_SideBar" to="/report_history_page">
            <div className="wrapper_SupportFunction_ReportHistory_SideBar">
              <img
                className="ReportHistoryLogo_SideBar"
                src={ReportHistoryLogo_SideBar}
                alt=""
              />
              <span className="ReportHistory_Title">ReportHistory</span>
            </div>
          </Link>
        ) : role === "" ? (
          <Link className="Link_SideBar" to="/Login">
            <div className="wrapper_SupportFunction_ReportHistory_SideBar">
              <img
                className="ReportHistoryLogo_SideBar"
                src={ReportHistoryLogo_SideBar}
                alt=""
              />
              <span className="ReportHistory_Title">ReportHistory</span>
            </div>
          </Link>
        ) : null}
        {role === true || role === false ? (
          <Link className="Link_SideBar" to="/send_feedback_page">
            <div className="wrapper_SupportFunction_SendFeedback_SideBar">
              <img
                className="SendFeedbackLogo_SideBar"
                src={SendFeedbackLogo_SideBar}
                alt=""
              />
              <span className="SendFeedback_Title">SendFeedback</span>
            </div>
          </Link>
        ) : role === "" ? (
          <Link className="Link_SideBar" to="/Login">
            <div className="wrapper_SupportFunction_SendFeedback_SideBar">
              <img
                className="SendFeedbackLogo_SideBar"
                src={SendFeedbackLogo_SideBar}
                alt=""
              />
              <span className="SendFeedback_Title">SendFeedback</span>
            </div>
          </Link>
        ) : null}
      </div>

      <div className="select_Side4">
        <div className="ListFooter_SideBar">
          <ul className="Ul_Footer_SideBar">
            <Link className="Link_SideBar" to="/secondLayout/about">
              <li className="Li_Footer_SideBar">About</li>
            </Link>
            <Link className="Link_SideBar" to="/secondLayout/press">
              <li className="Li_Footer_SideBar">Press</li>
            </Link>
            <Link className="Link_SideBar" to="/secondLayout/contact_us">
              <li className="Li_Footer_SideBar">Contact Us</li>
            </Link>
            <Link className="Link_SideBar" to="/coming-soon">
              <li className="Li_Footer_SideBar">Advertise</li>
            </Link>
            <Link className="Link_SideBar" to="/coming-soon">
              <li className="Li_Footer_SideBar">Developers</li>
            </Link>
            <Link className="Link_SideBar" to="/secondLayout/policy">
              <li className="Li_Footer_SideBar">Copyright</li>
            </Link>
            <Link className="Link_SideBar" to="/secondLayout/term">
              <li className="Li_Footer_SideBar">Privacy Policy</li>
            </Link>
            <Link className="Link_SideBar" to="/secondLayout/policy">
              <li className="Li_Footer_SideBar">Terms</li>
            </Link>
          </ul>
        </div>
        <div className="Footer_Content_SideBar">
          <p className="P_Footer_SideBar">
            © 2024 <strong className="Strong_Footer_SideBar">Cursus</strong>.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SidebarFrontend;

export function SideBarInstructorDashboardDemo() {
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  return (
    <div
      className={`SideBarInstructorDashboardDemo ${isShowAll ? "active" : ""}`}
    >
      <div className="SideBarInstructorDashboardDemo_select1">
        <Link
          to="/thirdlayout/instructor_studio_dashboard"
          className="Link_SideBarInstructorDashboardDemo"
        >
          <div className="SideBarInstructorDashboardDemo_select_wrapper">
            <UilApps className="SideBarInstructorDashboardDemo_select_Logo" />
            <span className="SideBarInstructorDashboardDemo_select_Title">
              Dashboard
            </span>
          </div>
        </Link>
        <Link
          to="/thirdlayout/course_page"
          className="Link_SideBarInstructorDashboardDemo"
        >
          <div className="SideBarInstructorDashboardDemo_select_wrapper">
            <UilBookAlt className="SideBarInstructorDashboardDemo_select_Logo" />
            <span className="SideBarInstructorDashboardDemo_select_Title">
              Courses
            </span>
          </div>
        </Link>
        <Link
          to="/thirdlayout/analyics"
          className="Link_SideBarInstructorDashboardDemo"
        >
          <div className="SideBarInstructorDashboardDemo_select_wrapper">
            <UilAnalysis className="SideBarInstructorDashboardDemo_select_Logo" />
            <span className="SideBarInstructorDashboardDemo_select_Title">
              Analyics
            </span>
          </div>
        </Link>
        <Link
          to="/thirdlayout/create_new_course"
          className="Link_SideBarInstructorDashboardDemo"
        >
          <div className="SideBarInstructorDashboardDemo_select_wrapper">
            <UilPlusCircle className="SideBarInstructorDashboardDemo_select_Logo" />
            <span className="SideBarInstructorDashboardDemo_select_Title">
              Create Course
            </span>
          </div>
        </Link>
        <Link
          to="/thirdlayout/messages"
          className="Link_SideBarInstructorDashboardDemo"
        >
          <div className="SideBarInstructorDashboardDemo_select_wrapper">
            <UilComments className="SideBarInstructorDashboardDemo_select_Logo" />
            <span className="SideBarInstructorDashboardDemo_select_Title">
              Messages
            </span>
          </div>
        </Link>
        <Link
          to="/thirdlayout/instructor_notification"
          className="Link_SideBarInstructorDashboardDemo"
        >
          <div className="SideBarInstructorDashboardDemo_select_wrapper">
            <UilBell className="SideBarInstructorDashboardDemo_select_Logo" />
            <span className="SideBarInstructorDashboardDemo_select_Title">
              Notifications
            </span>
          </div>
        </Link>
        <Link
          to="/thirdlayout/my_certificates"
          className="Link_SideBarInstructorDashboardDemo"
        >
          <div className="SideBarInstructorDashboardDemo_select_wrapper">
            <UilAward className="SideBarInstructorDashboardDemo_select_Logo" />
            <span className="SideBarInstructorDashboardDemo_select_Title">
              My Certificates
            </span>
          </div>
        </Link>
        <Link
          to="/thirdlayout/reviews_page_instructor"
          className="Link_SideBarInstructorDashboardDemo"
        >
          <div className="SideBarInstructorDashboardDemo_select_wrapper">
            <UilStar className="SideBarInstructorDashboardDemo_select_Logo" />
            <span className="SideBarInstructorDashboardDemo_select_Title">
              Reviews
            </span>
          </div>
        </Link>
        <Link
          to="/thirdlayout/earnings"
          className="Link_SideBarInstructorDashboardDemo"
        >
          <div className="SideBarInstructorDashboardDemo_select_wrapper">
            <UilDollarSign className="SideBarInstructorDashboardDemo_select_Logo" />
            <span className="SideBarInstructorDashboardDemo_select_Title">
              Earning
            </span>
          </div>
        </Link>
        <Link
          to="/thirdlayout/payout"
          className="Link_SideBarInstructorDashboardDemo"
        >
          <div className="SideBarInstructorDashboardDemo_select_wrapper">
            <UilWallet className="SideBarInstructorDashboardDemo_select_Logo" />
            <span className="SideBarInstructorDashboardDemo_select_Title">
              Payout
            </span>
          </div>
        </Link>
        <Link
          to="/thirdlayout/instructor_statement"
          className="Link_SideBarInstructorDashboardDemo"
        >
          <div className="SideBarInstructorDashboardDemo_select_wrapper">
            <UilFileAlt className="SideBarInstructorDashboardDemo_select_Logo" />
            <span className="SideBarInstructorDashboardDemo_select_Title">
              Statements
            </span>
          </div>
        </Link>
        <Link
          to="/thirdlayout/verification"
          className="Link_SideBarInstructorDashboardDemo"
        >
          <div className="SideBarInstructorDashboardDemo_select_wrapper">
            <UilCheckCircle className="SideBarInstructorDashboardDemo_select_Logo" />
            <span className="SideBarInstructorDashboardDemo_select_Title">
              Verification
            </span>
          </div>
        </Link>
      </div>
      <div className="SideBarInstructorDashboardDemo_select2">
        <Link
          to="/setting_page/account_tab"
          className="Link_SideBarInstructorDashboardDemo"
        >
          <div className="SideBarInstructorDashboardDemo_select_wrapper">
            <UilCog className="SideBarInstructorDashboardDemo_select_Logo" />
            <span className="SideBarInstructorDashboardDemo_select_Title">
              Setting
            </span>
          </div>
        </Link>
        <Link
          to="/send_feedback_page"
          className="Link_SideBarInstructorDashboardDemo"
        >
          <div className="SideBarInstructorDashboardDemo_select_wrapper">
            <UilCommentAltExclamation className="SideBarInstructorDashboardDemo_select_Logo" />
            <span className="SideBarInstructorDashboardDemo_select_Title">
              Send Feedback
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function SideBarStudentDashboardDemo() {
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  return (
    <div className={`SideBarStudentDashboardDemo ${isShowAll ? "active" : ""}`}>
      <div className="SideBarStudentDashboardDemo_select1">
        <Link
          to="/fourlayout/student_studio_dashboard"
          className="Link_SideBarStudentDashboardDemo"
        >
          <div className="SideBarStudentDashboardDemo_select_wrapper">
            <UilApps className="SideBarStudentDashboardDemo_select_Logo" />
            <span className="SideBarStudentDashboardDemo_select_Title">
              Dashboard
            </span>
          </div>
        </Link>
        <Link
          to="/fourlayout/purchased_courses_page"
          className="Link_SideBarStudentDashboardDemo"
        >
          <div className="SideBarStudentDashboardDemo_select_wrapper">
            <UilBookAlt className="SideBarStudentDashboardDemo_select_Logo" />
            <span className="SideBarStudentDashboardDemo_select_Title">
              Purchased Courses
            </span>
          </div>
        </Link>
        <Link
          to="/fourlayout/messages"
          className="Link_SideBarStudentDashboardDemo"
        >
          <div className="SideBarStudentDashboardDemo_select_wrapper">
            <UilComments className="SideBarStudentDashboardDemo_select_Logo" />
            <span className="SideBarStudentDashboardDemo_select_Title">
              Messages
            </span>
          </div>
        </Link>
        <Link
          to="/fourlayout/instructor_notification"
          className="Link_SideBarStudentDashboardDemo"
        >
          <div className="SideBarStudentDashboardDemo_select_wrapper">
            <UilBell className="SideBarStudentDashboardDemo_select_Logo" />
            <span className="SideBarStudentDashboardDemo_select_Title">
              Notifications
            </span>
          </div>
        </Link>
        <Link
          to="/fourlayout/my_certificates"
          className="Link_SideBarStudentDashboardDemo"
        >
          <div className="SideBarStudentDashboardDemo_select_wrapper">
            <UilAward className="SideBarStudentDashboardDemo_select_Logo" />
            <span className="SideBarStudentDashboardDemo_select_Title">
              My Certificates
            </span>
          </div>
        </Link>
        <Link
          to="/fourlayout/reviews_page_student"
          className="Link_SideBarStudentDashboardDemo"
        >
          <div className="SideBarStudentDashboardDemo_select_wrapper">
            <UilStar className="SideBarStudentDashboardDemo_select_Logo" />
            <span className="SideBarStudentDashboardDemo_select_Title">
              Reviews
            </span>
          </div>
        </Link>
        <Link
          to="/fourlayout/credits"
          className="Link_SideBarStudentDashboardDemo"
        >
          <div className="SideBarStudentDashboardDemo_select_wrapper">
            <UilWallet className="SideBarStudentDashboardDemo_select_Logo" />
            <span className="SideBarStudentDashboardDemo_select_Title">
              Credits
            </span>
          </div>
        </Link>
        <Link
          to="/fourlayout/students_statement"
          className="Link_SideBarStudentDashboardDemo"
        >
          <div className="SideBarStudentDashboardDemo_select_wrapper">
            <UilFileAlt className="SideBarStudentDashboardDemo_select_Logo" />
            <span className="SideBarStudentDashboardDemo_select_Title">
              Statements
            </span>
          </div>
        </Link>
      </div>
      <div className="SideBarStudentDashboardDemo_select2">
        <Link
          to="/setting_page/account_tab"
          className="Link_SideBarStudentDashboardDemo"
        >
          <div className="SideBarStudentDashboardDemo_select_wrapper">
            <UilCog className="SideBarStudentDashboardDemo_select_Logo" />
            <span className="SideBarStudentDashboardDemo_select_Title">
              Setting
            </span>
          </div>
        </Link>
        <Link
          to="/send_feedback_page"
          className="Link_SideBarStudentDashboardDemo"
        >
          <div className="SideBarStudentDashboardDemo_select_wrapper">
            <UilCommentAltExclamation className="SideBarStudentDashboardDemo_select_Logo" />
            <span className="SideBarStudentDashboardDemo_select_Title">
              Send Feedback
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
