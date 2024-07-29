import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layouts from "../components/Layouts";
import ThirdLayout from "../components/ThirdLayout";
import FourLayout from "../components/FourLayout";
import Homepage from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/Forgot_password";
import SignUpPage from "../pages/SignUp";
import SignUpStep from "../pages/SignUpStep";
import Policy from "../pages/Privacy_policy";
import TermOfUse from "../pages/TermOfUse";
import ExplorePage from "../pages/Explore_Page";
import Certification_Center from "../pages/Certification_Center";
import Certification_fill_form from "../pages/Certification_fill_form";
import Instructor_Profile from "../pages/Instructor_Profile";
import Student_Profile from "../pages/Student_Profile";
import Other_Instructor_View from "../pages/Other_Instructor_View";
import Thanks_Page from "../pages/Thanks_Page";
import Error_Page from "../pages/Error_Page";
import Certification_test_result from "../pages/Certification_Test_Result";
import SecondaryLayout from "../components/SecondaryLayout";
import Faq_detail_view from "../pages/Fag_detail_view/Faq_detail_view_1";
import Faq_detail_view_2 from "../pages/Fag_detail_view/Faq_detail_view_2";
import AboutPage from "../pages/About";
import CompanyDetails from "../pages/CompanyDetails";
import OurBlog from "../pages/OurBlog";
import BlogDetailView from "../pages/BlogDetailView";
import Press from "../pages/Press";
import Certification_Test_Page from "../pages/Certification_Test_Page";
import Certificate from "../pages/Certificate";
import ReportHistoryPage from "../pages/Report_History_Page";
import AllCategoriesPage from "../pages/All_Categories_Page";
import LiveStreams from "../pages/LiveStreams";
import Add_Live_Stream from "../pages/Add_Live_Stream";
import Help from "../pages/Help";
import Messages from "../pages/Messages";
import Payout from "../pages/Payout";
import Credits from "../pages/Credits";
import Saved_courses_page from "../pages/Saved_courses_page";
import Paid_membership_page from "../pages/Paid_Membership_Page";
import Course_detail from "../pages/Course_detail_view_page";
import Course_detail_about from "../pages/Course_detail_view_page/about";
import Course_detail_content from "../pages/Course_detail_view_page/course_content";
import Course_detail_reviews from "../pages/Course_detail_view_page/reviews";
import Contact_us from "../pages/Contact_us";
import Course_page from "../pages/Course_page";
import My_course from "../pages/Course_page/my_course";
import Discounts from "../pages/Course_page/discounts";
import My_purchases from "../pages/Course_page/my_purchases";
import Promotion from "../pages/Course_page/promotion";
import Upcoming_course from "../pages/Course_page/upcoming_course";
import Purchased_Courses_page from "../pages/Purchases_courses_page";
import Create_new_course from "../pages/Create_new_course";
import All_Instructor from "../pages/All_Instructor";
import My_Certificates from "../pages/My_Certificates";
import View_Live_Stream from "../pages/View_Live_Stream";
import Instructor_Notification from "../pages/Instructor_Notification";
import DetailCategoryPage from "../pages/Detail_Category_Page";
import SendFeedbackPage from "../pages/Send_Feedback_Page";
import Instructor_Studio_Dashboard from "../pages/Instructor_Studio_Dashboard_Page";
import Search_Results_Page from "../pages/Search_Results_Page";
import Checkout_Page from "../pages/Checkout_Page";
import Invoice_Page from "../pages/Invoice_Page";
import CareersPage from "../pages/Careers";
import ApplyJob from "../pages/ApplyJob";
import Shopping_Cart from "../pages/Shopping_Cart";
import ComingSoon from "../pages/ComingSoon";
import Students_statement from "../pages/Student_Statement";
import Instructor_statement from "../pages/Instructor_Statement";
import Earnings from "../pages/Earning";
import SettingPage from "../pages/Setting_Page";
import AccountTab from "../pages/Setting_Page/Account_Tab";
import NotificationTab from "../pages/Setting_Page/Notification_Tab";
import PrivacyTab from "../pages/Setting_Page/Privacy_Tab";
import BillingAndPayoutsTab from "../pages/Setting_Page/Billing_and_Payouts_Tab";
import APIClientsTab from "../pages/Setting_Page/API_Clients_Tab";
import CloseAccountTab from "../pages/Setting_Page/Close_Account_Tab";
import ReviewsPageInstructor from "../pages/ReviewsPageInstructor";
import Analyics from "../pages/Analyics";
import Student_Studio_Dashboard from "../pages/Student_Studio_Dashboard";
import Verification from "../pages/Verification";
import ReviewsPageStudent from "../pages/ReviewsPageStudent";
import Reset_password from "../pages/Forgot_password/Reset_password/reset_password";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/LiveStreams",
          element: <LiveStreams />,
        },
        {
          path: "/Add_Live_Stream",
          element: <Add_Live_Stream />,
        },
        {
          path: "/help",
          element: <Help />,
        },
        {
          path: "/report_history_page",
          element: <ReportHistoryPage />,
        },
        {
          path: "/instructor_profile",
          element: <Instructor_Profile />,
        },
        {
          path: "/student_profile",
          element: <Student_Profile />,
        },
        {
          path: "other_instructor_view/:id",
          element: <Other_Instructor_View />,
        },

        {
          path: "/detail_category_page",
          element: <DetailCategoryPage />,
        },
        {
          path: "/send_feedback_page",
          element: <SendFeedbackPage />,
        },
        {
          path: "/setting_page",
          element: <SettingPage />,
          children: [
            {
              path: "account_tab",
              element: <AccountTab />,
            },
            {
              path: "notification_tab",
              element: <NotificationTab />,
            },
            {
              path: "privacy_tab",
              element: <PrivacyTab />,
            },
            {
              path: "billing_and_payouts_tab",
              element: <BillingAndPayoutsTab />,
            },
            {
              path: "API_clients_tab",
              element: <APIClientsTab />,
            },
            {
              path: "close_account_tab",
              element: <CloseAccountTab />,
            },
          ],
        },
        {
          path: "saved_courses",
          element: <Saved_courses_page />,
        },
        {
          path: "course_detail/:id",
          element: <Course_detail />,
          children: [
            {
              path: "course_detail_about",
              element: <Course_detail_about />,
            },
            {
              path: "course_detail_course-content",
              element: <Course_detail_content />,
            },
            {
              path: "course_detail_reviews",
              element: <Course_detail_reviews />,
            },
          ],
        },
        {
          path: "/all_categories_page",
          element: <AllCategoriesPage />,
        },
        {
          path: "/report_history_page",
          element: <ReportHistoryPage />,
        },
        {
          path: "/explore_page",
          element: <ExplorePage />,
        },
        {
          path: "all_instructor",
          element: <All_Instructor />,
        },
        {
          path: "view_live_streams",
          element: <View_Live_Stream />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot_password",
      element: <ForgotPassword />,
    },
    {
      path: "/reset_password",
      element: <Reset_password />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/signupstep",
      element: <SignUpStep />,
    },
    {
      path: "/secondLayout",
      element: <SecondaryLayout />,
      children: [
        {
          path: "policy",
          element: <Policy />,
        },
        {
          path: "term",
          element: <TermOfUse />,
        },
        {
          path: "Faq_detail_view-1",
          element: <Faq_detail_view />,
        },
        {
          path: "Faq_detail_view-2",
          element: <Faq_detail_view_2 />,
        },
        {
          path: "contact_us",
          element: <Contact_us />,
        },
        {
          path: "checkout_page",
          element: <Checkout_Page />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "company",
          element: <CompanyDetails />,
        },
        {
          path: "blog",
          element: <OurBlog />,
        },
        {
          path: "blog-detail",
          element: <BlogDetailView />,
        },
        {
          path: "press",
          element: <Press />,
        },
        {
          path: "careers",
          element: <CareersPage />,
        },
        {
          path: "apply-job",
          element: <ApplyJob />,
        },
        {
          path: "certification_center",
          element: <Certification_Center />,
        },
        {
          path: "certification_fill_form",
          element: <Certification_fill_form />,
        },
        {
          path: "Certification_test_page",
          element: <Certification_Test_Page />,
        },
        {
          path: "Certification_test_result",
          element: <Certification_test_result />,
        },
        {
          path: "paid_membership_page",
          element: <Paid_membership_page />,
        },
        {
          path: "Shopping_cart",
          element: <Shopping_Cart />,
        },
        {
          path: "search_results_page",
          element: <Search_Results_Page />,
        },
      ],
    },
    {
      path: "/thirdlayout",
      element: <ThirdLayout />,
      children: [
        {
          path: "instructor_studio_dashboard",
          element: <Instructor_Studio_Dashboard />,
        },
        {
          path: "course_page",
          element: <Course_page />,
          children: [
            {
              path: "my_courses",
              element: <My_course />,
            },
            {
              path: "discounts",
              element: <Discounts />,
            },
            {
              path: "my_purchases",
              element: <My_purchases />,
            },
            {
              path: "promotion",
              element: <Promotion />,
            },
            {
              path: "upcoming_course",
              element: <Upcoming_course />,
            },
          ],
        },
        {
          path: "analyics",
          element: <Analyics />,
        },
        {
          path: "create_new_course",
          element: <Create_new_course />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "instructor_notification",
          element: <Instructor_Notification />,
        },
        {
          path: "my_certificates",
          element: <My_Certificates />,
        },
        {
          path: "reviews_page_instructor",
          element: <ReviewsPageInstructor />,
        },
        {
          path: "earnings",
          element: <Earnings />,
        },
        {
          path: "payout",
          element: <Payout />,
        },
        {
          path: "instructor_statement",
          element: <Instructor_statement />,
        },
        {
          path: "verification",
          element: <Verification />,
        },
      ],
    },
    {
      path: "/fourlayout",
      element: <FourLayout />,
      children: [
        {
          path: "student_studio_dashboard",
          element: <Student_Studio_Dashboard />,
        },
        {
          path: "purchased_courses_page",
          element: <Purchased_Courses_page />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "instructor_notification",
          element: <Instructor_Notification />,
        },
        {
          path: "my_certificates",
          element: <My_Certificates />,
        },
        {
          path: "reviews_page_student",
          element: <ReviewsPageStudent />,
        },
        {
          path: "credits",
          element: <Credits />,
        },
        {
          path: "students_statement",
          element: <Students_statement />,
        },
      ],
    },
    {
      path: "/certificate",
      element: <Certificate />,
    },
    {
      path: "/thanks_page",
      element: <Thanks_Page />,
    },
    {
      path: "*",
      element: <Error_Page />,
    },
    {
      path: "/report_history_page",
      element: <ReportHistoryPage />,
    },
    {
      path: "/all_categories_page",
      element: <AllCategoriesPage />,
    },
    {
      path: "/invoice_page",
      element: <Invoice_Page />,
    },
    {
      path: "/coming-soon",
      element: <ComingSoon />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Router;
