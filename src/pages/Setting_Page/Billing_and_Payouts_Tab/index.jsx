import { Input, Select } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  fetchAddr,
  setAddr,
  updateAddress,
} from "../../../redux/features/checkoutSlice";

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

  const dispatch = useDispatch();
  const account = useSelector((state) => state.user.account);

  const addr = useSelector((state) => state.checkout.addr);

  const { Option } = Select;
  const filterSort = (optionA, optionB) => {
    const labelA = optionA.label ? optionA.label.toLowerCase() : "";
    const labelB = optionB.label ? optionB.label.toLowerCase() : "";
    return labelA.localeCompare(labelB);
  };

  const countries = [
    { value: "1", label: "Afghanistan" },
    { value: "2", label: "Albania" },
    { value: "3", label: "Algeria" },
    { value: "4", label: "American Samoa" },
    { value: "5", label: "Andorra" },
    { value: "6", label: "Angola" },
    { value: "7", label: "Anguilla" },
    { value: "8", label: "Antarctica" },
    { value: "9", label: "Antigua and Barbuda" },
    { value: "10", label: "Argentina" },
    { value: "11", label: "Armenia" },
    { value: "12", label: "Aruba" },
    { value: "13", label: "Australia" },
    { value: "14", label: "Austria" },
    { value: "15", label: "Azerbaijan" },
    { value: "16", label: "Bahamas" },
    { value: "17", label: "Bahrain" },
    { value: "18", label: "Bangladesh" },
    { value: "19", label: "Barbados" },
    { value: "20", label: "Belarus" },
    { value: "21", label: "Belgium" },
    { value: "22", label: "Belize" },
    { value: "23", label: "Benin" },
    { value: "24", label: "Bermuda" },
    { value: "25", label: "Bhutan" },
    { value: "26", label: "Bolivia" },
    { value: "27", label: "Bosnia and Herzegovina" },
    { value: "28", label: "Botswana" },
    { value: "29", label: "Bouvet Island" },
    { value: "30", label: "Brazil" },
    { value: "31", label: "British Indian Ocean Territory" },
    { value: "32", label: "Brunei Darussalam" },
    { value: "33", label: "Bulgaria" },
    { value: "34", label: "Burkina Faso" },
    { value: "35", label: "Burundi" },
    { value: "36", label: "Cambodia" },
    { value: "37", label: "Cameroon" },
    { value: "38", label: "Canada" },
    { value: "39", label: "Cape Verde" },
    { value: "40", label: "Cayman Islands" },
    { value: "41", label: "Central African Republic" },
    { value: "42", label: "Chad" },
    { value: "43", label: "Chile" },
    { value: "44", label: "China" },
    { value: "45", label: "Christmas Island" },
    { value: "46", label: "Cocos (Keeling) Islands" },
    { value: "47", label: "Colombia" },
    { value: "48", label: "Comoros" },
    { value: "49", label: "Congo" },
    { value: "50", label: "Cook Islands" },
    { value: "51", label: "Costa Rica" },
    { value: "52", label: "Croatia (Hrvatska)" },
    { value: "53", label: "Cuba" },
    { value: "54", label: "Cyprus" },
    { value: "55", label: "Czech Republic" },
    { value: "56", label: "Denmark" },
    { value: "57", label: "Djibouti" },
    { value: "58", label: "Dominica" },
    { value: "59", label: "Dominican Republic" },
    { value: "60", label: "East Timor" },
    { value: "61", label: "Ecuador" },
    { value: "62", label: "Egypt" },
    { value: "63", label: "El Salvador" },
    { value: "64", label: "Equatorial Guinea" },
    { value: "65", label: "Eritrea" },
    { value: "66", label: "Estonia" },
    { value: "67", label: "Ethiopia" },
    { value: "68", label: "Falkland Islands (Malvinas)" },
    { value: "69", label: "Faroe Islands" },
    { value: "70", label: "Fiji" },
    { value: "71", label: "Finland" },
    { value: "72", label: "France" },
    { value: "73", label: "France, Metropolitan" },
    { value: "74", label: "French Guiana" },
    { value: "75", label: "French Polynesia" },
    { value: "76", label: "French Southern Territories" },
    { value: "77", label: "Gabon" },
    { value: "78", label: "Gambia" },
    { value: "79", label: "Georgia" },
    { value: "80", label: "Germany" },
    { value: "81", label: "Ghana" },
    { value: "82", label: "Gibraltar" },
    { value: "83", label: "Guernsey" },
    { value: "84", label: "Greece" },
    { value: "85", label: "Greenland" },
    { value: "86", label: "Grenada" },
    { value: "87", label: "Guadeloupe" },
    { value: "88", label: "Guam" },
    { value: "89", label: "Guatemala" },
    { value: "90", label: "Guinea" },
    { value: "91", label: "Guinea-Bissau" },
    { value: "92", label: "Guyana" },
    { value: "93", label: "Haiti" },
    { value: "94", label: "Heard and Mc Donald Islands" },
    { value: "95", label: "Honduras" },
    { value: "96", label: "Hong Kong" },
    { value: "97", label: "Hungary" },
    { value: "98", label: "Iceland" },
    { value: "99", label: "India" },
    { value: "100", label: "Isle of Man" },
    { value: "101", label: "Indonesia" },
    { value: "102", label: "Iran (Islamic Republic of)" },
    { value: "103", label: "Iraq" },
    { value: "104", label: "Ireland" },
    { value: "105", label: "Israel" },
    { value: "106", label: "Italy" },
    { value: "107", label: "Ivory Coast" },
    { value: "108", label: "Jersey" },
    { value: "109", label: "Jamaica" },
    { value: "110", label: "Japan" },
    { value: "111", label: "Jordan" },
    { value: "112", label: "Kazakhstan" },
    { value: "113", label: "Kenya" },
    { value: "114", label: "Kiribati" },
    { value: "115", label: "Korea, Democratic People's Republic of" },
    { value: "116", label: "Korea, Republic of" },
    { value: "117", label: "Kosovo" },
    { value: "118", label: "Kuwait" },
    { value: "119", label: "Kyrgyzstan" },
    { value: "120", label: "Lao People's Democratic Republic" },
    { value: "121", label: "Latvia" },
    { value: "122", label: "Lebanon" },
    { value: "123", label: "Lesotho" },
    { value: "124", label: "Liberia" },
    { value: "125", label: "Libyan Arab Jamahiriya" },
    { value: "126", label: "Liechtenstein" },
    { value: "127", label: "Lithuania" },
    { value: "128", label: "Luxembourg" },
    { value: "129", label: "Macau" },
    { value: "130", label: "Macedonia" },
    { value: "131", label: "Madagascar" },
    { value: "132", label: "Malawi" },
    { value: "133", label: "Malaysia" },
    { value: "134", label: "Maldives" },
    { value: "135", label: "Mali" },
    { value: "136", label: "Malta" },
    { value: "137", label: "Marshall Islands" },
    { value: "138", label: "Martinique" },
    { value: "139", label: "Mauritania" },
    { value: "140", label: "Mauritius" },
    { value: "141", label: "Mayotte" },
    { value: "142", label: "Mexico" },
    { value: "143", label: "Micronesia, Federated States of" },
    { value: "144", label: "Moldova, Republic of" },
    { value: "145", label: "Monaco" },
    { value: "146", label: "Mongolia" },
    { value: "147", label: "Montenegro" },
    { value: "148", label: "Montserrat" },
    { value: "149", label: "Morocco" },
    { value: "150", label: "Mozambique" },
    { value: "151", label: "Myanmar" },
    { value: "152", label: "Namibia" },
    { value: "153", label: "Nauru" },
    { value: "154", label: "Nepal" },
    { value: "155", label: "Netherlands" },
    { value: "156", label: "Netherlands Antilles" },
    { value: "157", label: "New Caledonia" },
    { value: "158", label: "New Zealand" },
    { value: "159", label: "Nicaragua" },
    { value: "160", label: "Niger" },
    { value: "161", label: "Nigeria" },
    { value: "162", label: "Niue" },
    { value: "163", label: "Norfolk Island" },
    { value: "164", label: "Northern Mariana Islands" },
    { value: "165", label: "Norway" },
    { value: "166", label: "Oman" },
    { value: "167", label: "Pakistan" },
    { value: "168", label: "Palau" },
    { value: "169", label: "Panama" },
    { value: "170", label: "Papua New Guinea" },
    { value: "171", label: "Paraguay" },
    { value: "172", label: "Peru" },
    { value: "173", label: "Philippines" },
    { value: "174", label: "Pitcairn" },
    { value: "175", label: "Poland" },
    { value: "176", label: "Portugal" },
    { value: "177", label: "Puerto Rico" },
    { value: "178", label: "Qatar" },
    { value: "179", label: "Reunion" },
    { value: "180", label: "Romania" },
    { value: "181", label: "Russian Federation" },
    { value: "182", label: "Rwanda" },
    { value: "183", label: "Saint Kitts and Nevis" },
    { value: "184", label: "Saint Lucia" },
    { value: "185", label: "Saint Vincent and the Grenadines" },
    { value: "186", label: "Samoa" },
    { value: "187", label: "San Marino" },
    { value: "188", label: "Sao Tome and Principe" },
    { value: "189", label: "Saudi Arabia" },
    { value: "190", label: "Senegal" },
    { value: "191", label: "Serbia" },
    { value: "192", label: "Seychelles" },
    { value: "193", label: "Sierra Leone" },
    { value: "194", label: "Singapore" },
    { value: "195", label: "Slovakia (Slovak Republic)" },
    { value: "196", label: "Slovenia" },
    { value: "197", label: "Solomon Islands" },
    { value: "198", label: "Somalia" },
    { value: "199", label: "South Africa" },
    { value: "200", label: "South Georgia and the South Sandwich Islands" },
    { value: "201", label: "South Sudan" },
    { value: "202", label: "Spain" },
    { value: "203", label: "Sri Lanka" },
    { value: "204", label: "St. Helena" },
    { value: "205", label: "St. Pierre and Miquelon" },
    { value: "206", label: "Sudan" },
    { value: "207", label: "Suriname" },
    { value: "208", label: "Svalbard and Jan Mayen Islands" },
    { value: "209", label: "Swaziland" },
    { value: "210", label: "Sweden" },
    { value: "211", label: "Switzerland" },
    { value: "212", label: "Syrian Arab Republic" },
    { value: "213", label: "Taiwan" },
    { value: "214", label: "Tajikistan" },
    { value: "215", label: "Tanzania, United Republic of" },
    { value: "216", label: "Thailand" },
    { value: "217", label: "Togo" },
    { value: "218", label: "Tokelau" },
    { value: "219", label: "Tonga" },
    { value: "220", label: "Trinidad and Tobago" },
    { value: "221", label: "Tunisia" },
    { value: "222", label: "Turkey" },
    { value: "223", label: "Turkmenistan" },
    { value: "224", label: "Turks and Caicos Islands" },
    { value: "225", label: "Tuvalu" },
    { value: "226", label: "Uganda" },
    { value: "227", label: "Ukraine" },
    { value: "228", label: "United Arab Emirates" },
    { value: "229", label: "United Kingdom" },
    { value: "230", label: "United States" },
    { value: "231", label: "United States Minor Outlying Islands" },
    { value: "232", label: "Uruguay" },
    { value: "233", label: "Uzbekistan" },
    { value: "234", label: "Vanuatu" },
    { value: "235", label: "Vatican City State (Holy See)" },
    { value: "236", label: "Venezuela" },
    { value: "237", label: "Vietnam" },
    { value: "238", label: "Virgin Islands (British)" },
    { value: "239", label: "Virgin Islands (U.S.)" },
    { value: "240", label: "Wallis and Futuna Islands" },
    { value: "241", label: "Western Sahara" },
    { value: "242", label: "Yemen" },
    { value: "243", label: "Zaire" },
    { value: "244", label: "Zambia" },
    { value: "245", label: "Zimbabwe" },
  ];

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        updateAddress({ userId: account?.id, addrId: addr?.id, addr })
      ).unwrap();
      console.log("Address updated successfully");
      toast.success("Address updated successfully!");
    } catch (error) {
      console.error("Error updating address:", error);
      toast.error("Failed to update address. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setAddr({ ...addr, [name]: value }));
  };

  const handleSelectChange = (value) => {
    const selectedCountry = countries.find(
      (country) => country.value === value
    );
    dispatch(
      setAddr({
        ...addr,
        Country: selectedCountry ? selectedCountry.label : "",
      })
    );
  };

  useEffect(() => {
    dispatch(fetchAddr(account?.id));
  }, [dispatch]);

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
            className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
            type="text"
            name="userName"
            value={addr.userName || ""}
            id="id_name"
            required
            maxLength="64"
            placeholder="User Name"
            onChange={handleChange}
          />
        </div>
        <Input
          className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
          type="text"
          name="AcademyName"
          value={addr.AcademyName || ""}
          id="id_academy"
          required
          maxLength="64"
          placeholder="Academy Name"
          onChange={handleChange}
        />
        <span className="BillingAndPayoutsTab_ContentsUnder_SPAN">
          If you want your invoices addressed to a academy. Leave blank to use
          your full name.
        </span>
        <Select
          showSearch
          style={{
            width: "100%",
            // height: 40,
            borderRadius: 3,
          }}
          placeholder="Select a country"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.label.toLowerCase().includes(input.toLowerCase())
          }
          filterSort={filterSort}
          onChange={handleSelectChange}
          value={
            addr.Country
              ? countries.find((country) => country.label === addr.Country)
                  ?.value
              : undefined
          }
        >
          {countries.map((country) => (
            <Option key={country.value} value={country.value}>
              {country.label}
            </Option>
          ))}
        </Select>
        <Input
          className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
          type="text"
          name="Address1"
          value={addr.Address1 || ""}
          id="id_address1"
          required
          maxLength="300"
          placeholder="Address Line 1"
          onChange={handleChange}
        />
        <Input
          className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
          type="text"
          name="Address2"
          value={addr.Address2 || ""}
          id="id_address2"
          required
          maxLength="300"
          placeholder="Address Line 2"
          onChange={handleChange}
        />
        <Input
          className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
          type="text"
          name="City"
          value={addr.City || ""}
          id="id_city"
          required
          maxLength="64"
          placeholder="City"
          onChange={handleChange}
        />
        <Input
          className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
          type="text"
          name="State"
          value={addr.State || ""}
          id="id_state"
          required
          maxLength="64"
          placeholder="State / Province / Region"
          onChange={handleChange}
        />
        <Input
          className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
          type="text"
          name="ZipCode"
          value={addr.ZipCode || ""}
          id="id_zip"
          required
          maxLength="64"
          placeholder="Zip / Postal Code"
          onChange={handleChange}
        />
        <Input
          className="BillingAndPayoutsTab_Contents_InputHeadline_Headline"
          type="text"
          name="Phone"
          value={addr.Phone || ""}
          id="id_phone"
          required
          maxLength="12"
          placeholder="Phone Number"
          onChange={handleChange}
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
            Sell more of your non-exclusive products of this type (equal to the
            amount on the left) to get 70% cut from every non-exclusive sales.
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
      <button
        className="BillingAndPayoutsTab_Save_ButtonSet"
        onClick={handleSave}
      >
        Save Changes
      </button>
    </div>
  );
}

export default BillingAndPayoutsTab;
