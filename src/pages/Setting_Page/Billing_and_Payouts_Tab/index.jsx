import { Input, Select } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function BillingAndPayoutsTab() {
  const [paypalOpen, setPaypalOpen] = useState(false);
  const [payoneerOpen, setPayoneerOpen] = useState(false);
  const [swiftOpen, setSwiftOpen] = useState(false);

  function handlePaypalOpen() {
    setPaypalOpen(true);
    setPayoneerOpen(false);
    setSwiftOpen(false);
    console.log(paypalOpen, payoneerOpen, swiftOpen);
  }
  function handlePayoneerOpen() {
    setPaypalOpen(false);
    setPayoneerOpen(true);
    setSwiftOpen(false);
    console.log(paypalOpen, payoneerOpen, swiftOpen);
  }
  function handleSwiftOpen() {
    setPaypalOpen(false);
    setPayoneerOpen(false);
    setSwiftOpen(true);
    console.log(paypalOpen, payoneerOpen, swiftOpen);
  }

  const options = [
    {
      label: "Argentina",
      value: "Argentina",
    },
    {
      label: "Belgium",
      value: "Belgium",
    },
    {
      label: "Brazil",
      value: "Brazil",
    },
    {
      label: "Cambodia",
      value: "Cambodia",
    },
    {
      label: "Ecuador",
      value: "Ecuador",
    },
    {
      label: "France",
      value: "France",
    },
    {
      label: "Japan",
      value: "Japan",
    },
    {
      label: "Namibia",
      value: "Namibia",
    },
    {
      label: "Norway",
      value: "Norway",
    },
    {
      label: "Portugal",
      value: "Portugal",
    },
    {
      label: "Romania",
      value: "Romania",
    },
    {
      label: "Spain",
      value: "Spain",
    },
    {
      label: "Tajikistan",
      value: "Tajikistan",
    },
    {
      label: "Ukraine",
      value: "Ukraine",
    },
    {
      label: "Vietnam",
      value: "Vietnam",
    },
    {
      label: "Zambia",
      value: "Zambia",
    },
  ];
  return (
    <div className="BillingAndPayoutsTab">
      <div className="AllTabButton_SettingPage">
        <Link to="/setting_page/account_tab">
          <button className="AllTabButton_SettingPage_Rest">Account</button>
        </Link>
        <Link to="/setting_page/notification_tab">
          <button className="AllTabButton_SettingPage_Rest">
            Notification
          </button>
        </Link>
        <Link to="/setting_page/privacy_tab">
          <button className="AllTabButton_SettingPage_Rest">Privacy</button>
        </Link>
        <button className="AllTabButton_SettingPage_BillingAndPayoutsTab">
          Billing and Payouts
        </button>
        <Link to="/setting_page/API_clients_tab">
          <button className="AllTabButton_SettingPage_Rest">API Clients</button>
        </Link>
        <Link to="/setting_page/close_account_tab">
          <button className="AllTabButton_SettingPage_Rest">
            Close Account
          </button>
        </Link>
      </div>
      <div className="BillingAndPayoutsTab_Contents">
        <h4 className="BillingAndPayoutsTab_Contents_Title_H4">
          Billing and Payouts
        </h4>
        <p className="BillingAndPayoutsTab_Contents_TitleOfH4_P">
          Want to charge for a course? Provide your payment info and opt in for
          our promotional programs
        </p>
        <h4 className="BillingAndPayoutsTab_Contents_TitleOf_H4">
          Billing Address
        </h4>
        <div className="BillingAndPayoutsTab_Contents_InputName">
          <Input
            className="BillingAndPayoutsTab_Contents_InputName_FirstName"
            placeholder="First Name"
          />
          <Input
            className="BillingAndPayoutsTab_Contents_InputName_LastName"
            placeholder="Last Name"
          />
        </div>
        <Input
          className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
          placeholder="Academy Name"
        />
        <span className="BillingAndPayoutsTab_ContentsUnder_SPAN">
          If you want your invoices addressed to a academy. Leave blank to use
          your full name.
        </span>
        <Select
          className="BillingAndPayoutsTab_Contents_Select"
          defaultValue="Vietnam"
          style={{
            width: "100%",
          }}
          options={options}
        />
        <Input
          className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
          placeholder="Address Line 1"
        />
        <Input
          className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
          placeholder="Address Line 2"
        />
        <Input
          className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
          placeholder="City"
        />
        <Input
          className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
          placeholder="State / Province / Region"
        />
        <Input
          className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
          placeholder="Zip / Postal Code"
        />
        <Input
          className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
          placeholder="Phone Number"
        />
      </div>
      <div className="BillingAndPayoutsTab_orExclusiveSales">
        <div className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales">
          <h4 className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_H4">
            Exclusive Sales
          </h4>
          <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_P">
            Sell more of your exclusive products of this type (equal to the
            amount on the left) to get % cut from further exclusive sales.
          </p>
          <div className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1">
            <span className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span_One">
              $0
              <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span__">
              |
            </p>
            <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_percent1_Span_One">
            50%
            </p>
            </span>
            <span className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span">
              $2,000
              <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span__">
              |
            </p>
            <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_percent1_Span">
            53%
            </p>
            </span>
            <span className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span">
              $8,000
              <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span__">
              |
            </p>
            <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_percent1_Span">
            55%
            </p>
            </span>
            <span className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span">
              $18,000
              <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span__">
              |
            </p>
            <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_percent1_Span">
            58%
            </p>
            </span>
            <span className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span">
              $40,000
              <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span__">
              |
            </p>
            <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_percent1_Span">
            62%
            </p>
            </span>
            <span className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span">
              $75,000
              <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span__">
              |
            </p>
            <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_percent1_Span">
            70%
            </p>
            </span>
            <span className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span">
              $100,000
              <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span__">
              |
            </p>
            <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_percent1_Span">
            80%
            </p>
            </span>
          </div>
        </div>
        <div className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales">
          <h4 className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_H4">
          Non-Exclusive Sales
          </h4>
          <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_P">
          Sell more of your non-exclusive products of this type (equal to the amount on the left) to get 70% cut from every non-exclusive sales.
          </p>
          <div className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1">
            <span className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span_One">
              $0
              <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span__">
              |
            </p>
            <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_percent1_Span_One">
            30%
            </p>
            </span>
            <span className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span">
              $2,000
              <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span__">
              |
            </p>
            <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_percent1_Span">
            30%
            </p>
            </span>
            <span className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span">
              $8,000
              <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span__">
              |
            </p>
            <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_percent1_Span">
            30%
            </p>
            </span>
            <span className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span">
              $18,000
              <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span__">
              |
            </p>
            <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_percent1_Span">
            30%
            </p>
            </span>
            <span className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span">
              $40,000
              <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span__">
              |
            </p>
            <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_percent1_Span">
            30%
            </p>
            </span>
            <span className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span">
              $75,000
              <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span__">
              |
            </p>
            <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_percent1_Span">
            30%
            </p>
            </span>
            <span className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span">
              $100,000
              <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_listMoney1_Span__">
              |
            </p>
            <p className="BillingAndPayoutsTab_orExclusiveSales_ExclusiveSales_percent1_Span">
            30%
            </p>
            </span>
          </div>
        </div>
      </div>
      <div className="BillingAndPayoutsTab_WithrawalMethod">
        Withrawal Method
        <div className="BillingAndPayoutsTab_WithrawalMethod_Button_Choice_Tab">
          <button
            className="BillingAndPayoutsTab_WithrawalMethod_Paypal_button"
            onClick={handlePaypalOpen}
          >
            <div
              className={`radioChoice_Paypal ${paypalOpen ? "red" : ""}`}
            ></div>
            <span className="word_Paypal">Paypal</span>
          </button>
          <button
            className="BillingAndPayoutsTab_WithrawalMethod_Payoneer_button"
            onClick={handlePayoneerOpen}
          >
            <div
              className={`radioChoice_Payoneer ${payoneerOpen ? "red" : ""}`}
            ></div>
            <span className="word_Payoneer">Payoneer</span>
          </button>
          <button
            className="BillingAndPayoutsTab_WithrawalMethod_Swift_button"
            onClick={handleSwiftOpen}
          >
            <div
              className={`radioChoice_Swift ${swiftOpen ? "red" : ""}`}
            ></div>
            <span className="word_Swift">Swift</span>
          </button>
        </div>
        <div
          className={`BillingAndPayoutsTab_WithrawalMethod_Paypal ${
            paypalOpen ? "active" : "hidden"
          }`}
        >
          <h4 className="BillingAndPayoutsTab_WithrawalMethod_Paypal_Title_H4">
            Your PayPal Account
          </h4>
          <span className="BillingAndPayoutsTab_WithrawalMethod_Paypal_Title_Span">
            Minimum - $50.00
          </span>
          <p className="BillingAndPayoutsTab_WithrawalMethod_Paypal_Contents_Span">
            Get paid by credit or debit card, PayPal transfer or even via bank
            account in just a few clicks. All you need is your email address or
            mobile number.{" "}
            <Link className="BillingAndPayoutsTab_WithrawalMethod_Paypal_Contents_Span_Link">
              More about PayPal
            </Link>{" "}
            |{" "}
            <Link className="BillingAndPayoutsTab_WithrawalMethod_Paypal_Contents_Span_Link">
              Create an account
            </Link>
          </p>
          <Input
            className="BillingAndPayoutsTab_WithrawalMethod_Paypal_Input"
            placeholder="Email address"
          />
          <br />
          <Input
            className="BillingAndPayoutsTab_WithrawalMethod_Paypal_Input"
            placeholder="Confirm email address"
          />
          <br />
          <button className="BillingAndPayoutsTab_WithrawalMethod_Paypal_ButtonSet">
            Set Payout Account
          </button>
        </div>
        <div
          className={`BillingAndPayoutsTab_WithrawalMethod_Payoneer ${
            payoneerOpen ? "active" : "hidden"
          }`}
        >
          <h4 className="BillingAndPayoutsTab_WithrawalMethod_Payoneer_Title_H4">
            Your Payoneer Account
          </h4>
          <span className="BillingAndPayoutsTab_WithrawalMethod_Payoneer_Title_Span">
            Minimum - $50.00
          </span>
          <p className="BillingAndPayoutsTab_WithrawalMethod_Payoneer_Contents_Span">
            Payoneer Prepaid MasterCard® or Global Bank Transfer (Payoneer)
            offers an easy, convenient and cost effective way to get paid.{" "}
            <Link className="BillingAndPayoutsTab_WithrawalMethod_Payoneer_Contents_Span_Link">
              More about Payoneer
            </Link>{" "}
            |{" "}
            <Link className="BillingAndPayoutsTab_WithrawalMethod_Payoneer_Contents_Span_Link">
              Payoneer FAQs
            </Link>
          </p>
          <Input
            className="BillingAndPayoutsTab_WithrawalMethod_Payoneer_Input"
            placeholder="Email address"
          />
          <br />
          <Input
            className="BillingAndPayoutsTab_WithrawalMethod_Payoneer_Input"
            placeholder="Confirm email address"
          />
          <br />
          <button className="BillingAndPayoutsTab_WithrawalMethod_Payoneer_ButtonSet">
            Set Payout Account
          </button>
        </div>
        <div
          className={`BillingAndPayoutsTab_WithrawalMethod_Swift ${
            swiftOpen ? "active" : "hidden"
          }`}
        >
          <h4 className="BillingAndPayoutsTab_WithrawalMethod_Swift_Title_H4">
            Your SWIFT Account
          </h4>
          <span className="BillingAndPayoutsTab_WithrawalMethod_Swift_Title_Span">
            Minimum - $500.00
          </span>
          <p className="BillingAndPayoutsTab_WithrawalMethod_Swift_Contents_Span">
            SWIFT (International Transfer) get paid directly into your bank
            account. Connected with over 9000 banking organisations, security
            institutions and customers in more than 200 countries{" "}
            <Link className="BillingAndPayoutsTab_WithrawalMethod_Swift_Contents_Span_Link">
              More about SWIFT
            </Link>
          </p>
          <Input
            className="BillingAndPayoutsTab_WithrawalMethod_Swift_Input"
            placeholder="Full Name"
          />
          <br />
          <Input
            className="BillingAndPayoutsTab_WithrawalMethod_Swift_Input"
            placeholder="Your Address"
          />
          <br />
          <Select
            className="BillingAndPayoutsTab_WithrawalMethod_Swift_Select"
            defaultValue="Vietnam"
            style={{
              width: "100%",
            }}
            options={options}
          />
          <br />
          <Input
            className="BillingAndPayoutsTab_WithrawalMethod_Swift_Input"
            placeholder="Swift-Code"
          />
          <br />
          <Input
            className="BillingAndPayoutsTab_WithrawalMethod_Swift_Input"
            placeholder="Back Account Number"
          />
          <br />
          <Input
            className="BillingAndPayoutsTab_WithrawalMethod_Swift_Input"
            placeholder="Back Name"
          />
          <br />
          <Input
            className="BillingAndPayoutsTab_WithrawalMethod_Swift_Input"
            placeholder="Back Address"
          />
          <br />
          <button className="BillingAndPayoutsTab_WithrawalMethod_Swift_ButtonSet">
            Set Payout Account
          </button>
        </div>
      </div>
      <button className="BillingAndPayoutsTab_Save_ButtonSet">
        Save Changes
      </button>
    </div>
  );
}

export default BillingAndPayoutsTab;
