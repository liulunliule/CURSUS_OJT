import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faBuildingColumns,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { line } from "../../assets";
import { Select } from "antd";
import {
  fetchAddr,
  setAddr,
  updateAddress,
} from "../../redux/features/checkoutSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchShoppingCart } from "../../redux/features/shoppingCartSlice";

const Checkout_Page = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.user.account);
  const items = useSelector((state) => state.shoppingCart.items);

  const userId = account.id;
  const [activeId, setActiveId] = useState(null);
  const [activeTab, setActiveTab] = useState("credit-tab");
  const [discountPrice, setDiscountPrice] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);

  const { addr, order, status, error } = useSelector((state) => state.checkout);

  const total = originalPrice - discountPrice.toFixed(2);
  const discountPriceRounded = discountPrice.toFixed(2);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

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
        updateAddress({ userId, addrId: addr?.id, addr })
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
    dispatch(fetchShoppingCart(userId));
    dispatch(fetchAddr(userId));
    if (status === "succeeded") {
      const totalPrice = items.reduce(
        (sum, item) => sum + parseFloat(item.price),
        0
      );
      setOriginalPrice(totalPrice);
      setDiscountPrice(totalPrice * 0.2); // Apply 20% discount
    }
  }, [dispatch, userId, items]);

  return (
    <div className="Checkout_Page">
      <div className="toolbar_certification">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="toolbar_title">
                <div className="titleleft">
                  <div className="toolbar_title_item">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link href="/">Home</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Certification Fill Form
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div className="titleright">
                  <Link
                    to="/secondLayout/certification_center"
                    className="blog_link"
                  >
                    <FontAwesomeIcon icon={faAnglesLeft} /> Back to
                    Certification Center
                  </Link>
                </div>
              </div>
              <div className="main_title">
                <h2>Certification Fill Form</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body_checkout_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout_chk_bg">
                {addr ? (
                  <div>
                    <div className="checkout_title">
                      <h4>Billing Details</h4>
                      <img src={line} alt="" />
                    </div>
                    <div
                      className="panel-group"
                      id="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="panel-default">
                        <div className="panel-heading" role="tab" id="address1">
                          <div className="panel-title">
                            <div
                              className={`link ${
                                activeId === 1 ? "" : "collapsed"
                              }`}
                              onClick={() => handleToggle(1)}
                            >
                              Edit Address
                            </div>
                          </div>
                        </div>
                        {activeId === 1 && (
                          <div>
                            <div className="panel-body">
                              <form onSubmit={handleSave}>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="UI search panel-body_text">
                                      <label>User Name*</label>
                                      <div className="UI input panel-body_text_item">
                                        <input
                                          className="prompt srch_explore"
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
                                    </div>
                                  </div>
                                  <div className="col-lg-6"></div>
                                  <div className="col-lg-12">
                                    <div className="UI search panel-body_text">
                                      <label>Academy Name*</label>
                                      <div className="UI input panel-body_text_item">
                                        <input
                                          className="prompt srch_explore"
                                          type="text"
                                          name="AcademyName"
                                          value={addr.AcademyName || ""}
                                          id="id_academy"
                                          required
                                          maxLength="64"
                                          placeholder="Academy Name"
                                          onChange={handleChange}
                                        />
                                      </div>
                                      <div className="help-block">
                                        If you want your invoices addressed to
                                        an academy. Leave blank to use your full
                                        name.
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="country">
                                      <label>Country*</label>
                                    </div>
                                    <Select
                                      showSearch
                                      style={{
                                        width: "100%",
                                        height: 40,
                                        borderRadius: 3,
                                      }}
                                      placeholder="Select a country"
                                      optionFilterProp="children"
                                      filterOption={(input, option) =>
                                        option.label
                                          .toLowerCase()
                                          .includes(input.toLowerCase())
                                      }
                                      filterSort={filterSort}
                                      onChange={handleSelectChange}
                                      value={
                                        addr.Country
                                          ? countries.find(
                                              (country) =>
                                                country.label === addr.Country
                                            )?.value
                                          : undefined
                                      }
                                    >
                                      {countries.map((country) => (
                                        <Option
                                          key={country.value}
                                          value={country.value}
                                        >
                                          {country.label}
                                        </Option>
                                      ))}
                                    </Select>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="UI search panel-body_text">
                                      <label>Address1*</label>
                                      <div className="UI input panel-body_text_item">
                                        <input
                                          className="prompt srch_explore"
                                          type="text"
                                          name="Address1"
                                          value={addr.Address1 || ""}
                                          id="id_address1"
                                          required
                                          maxLength="300"
                                          placeholder="Address Line 1"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="UI search panel-body_text">
                                      <label>Address2*</label>
                                      <div className="UI input panel-body_text_item">
                                        <input
                                          className="prompt srch_explore"
                                          type="text"
                                          name="Address2"
                                          value={addr.Address2 || ""}
                                          id="id_address2"
                                          required
                                          maxLength="300"
                                          placeholder="Address Line 2"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="UI search panel-body_text">
                                      <label>City*</label>
                                      <div className="UI input panel-body_text_item">
                                        <input
                                          className="prompt srch_explore"
                                          type="text"
                                          name="City"
                                          value={addr.City || ""}
                                          id="id_city"
                                          required
                                          maxLength="64"
                                          placeholder="City"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="UI search panel-body_text">
                                      <label>State / Province / Region*</label>
                                      <div className="UI input panel-body_text_item">
                                        <input
                                          className="prompt srch_explore"
                                          type="text"
                                          name="State"
                                          value={addr.State || ""}
                                          id="id_state"
                                          required
                                          maxLength="64"
                                          placeholder="State / Province / Region"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="UI search panel-body_text">
                                      <label>Zip/Postal Code*</label>
                                      <div className="UI input panel-body_text_item">
                                        <input
                                          className="prompt srch_explore"
                                          type="text"
                                          name="ZipCode"
                                          value={addr.ZipCode || ""}
                                          id="id_zip"
                                          required
                                          maxLength="64"
                                          placeholder="Zip / Postal Code"
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="UI search panel-body_text">
                                      <label>Phone Number*</label>
                                      <div className="UI input panel-body_text_item">
                                        <input
                                          className="prompt srch_explore"
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
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <button
                                      className="save_address_btn"
                                      type="submit"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {addr && (
                      <div className="address_text">
                        {addr.userName} <br />
                        {addr.Address1}
                        <br /> {addr.Address2}
                        <br /> Road.
                        <br /> {addr.City}, {addr.State}, {addr.ZipCode}
                        <br /> {addr.Country}
                      </div>
                    )}
                  </div>
                ) : (
                  <div>Loading...</div>
                )}
              </div>
              <div className="checkout_chk_bg">
                <div className="checkout_title">
                  <h4>Select Payment Method</h4>
                  <img src={line} alt="" />
                </div>
                <div className="checkout-tabs">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setActiveTab("credit-tab")}
                        id="credit-tab"
                        className={`nav-link ${
                          activeTab === "credit-tab" ? "active" : ""
                        }`}
                        data-bs-toggle="tab"
                        aria-selected={activeTab === "credit-tab"}
                        role="tab"
                      >
                        <FontAwesomeIcon
                          icon={faCreditCard}
                          style={{ marginRight: 5 }}
                        />{" "}
                        Credit/Debit Card
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setActiveTab("bank-tab")}
                        id="bank-tab"
                        className={`nav-link ${
                          activeTab === "bank-tab" ? "active" : ""
                        }`}
                        data-bs-toggle="tab"
                        aria-selected={activeTab === "bank-tab"}
                        tabIndex={activeTab === "bank-tab" ? 0 : -1}
                        role="tab"
                      >
                        <FontAwesomeIcon
                          icon={faBuildingColumns}
                          style={{ marginRight: 5 }}
                        />{" "}
                        Bank Transfer
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setActiveTab("paypal-tab")}
                        id="paypal-tab"
                        className={`nav-link ${
                          activeTab === "paypal-tab" ? "active" : ""
                        }`}
                        data-bs-toggle="tab"
                        aria-selected={activeTab === "paypal-tab"}
                        tabIndex={activeTab === "paypal-tab" ? 0 : -1}
                        role="tab"
                      >
                        <FontAwesomeIcon
                          icon={faPaypal}
                          style={{ marginRight: 5 }}
                        />{" "}
                        Paypal
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div
                    className={`tab-pane fade ${
                      activeTab === "credit-tab" ? "active show" : ""
                    }`}
                    id="credit-method-tab"
                    role="tabpanel"
                    aria-labelledby="credit-tab"
                  >
                    <form className="basic_form title">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="UI search panel-body_text">
                            <label>Holder Name</label>
                            <div className="UI input panel-body_text_item">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="holder[name]"
                                value=""
                                id="id_holdername"
                                required=""
                                maxLength="64"
                                placeholder="Enter Holder Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="UI search panel-body_text">
                            <label>Card Number</label>
                            <div className="UI input panel-body_text_item">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="card[number]"
                                maxLength="16"
                                placeholder="Card #"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="panel-body_text">
                            <label>Expiration Month</label>
                            <Select
                              showSearch
                              style={{ width: "100%", height: 40 }}
                              placeholder="Month"
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.children
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                            >
                              <Option value="">Month</Option>
                              <Option value="1">January</Option>
                              <Option value="2">February</Option>
                              <Option value="3">March</Option>
                              <Option value="4">April</Option>
                              <Option value="5">May</Option>
                              <Option value="6">June</Option>
                              <Option value="7">July</Option>
                              <Option value="8">August</Option>
                              <Option value="9">September</Option>
                              <Option value="10">October</Option>
                              <Option value="11">November</Option>
                              <Option value="12">December</Option>
                            </Select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="UI search panel-body_text">
                            <label>Expiration Year</label>
                            <div className="UI input panel-body_text_item">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="card[expire-year]"
                                maxLength="4"
                                placeholder="Year"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="UI search panel-body_text">
                            <label>Expiration CVC</label>
                            <div className="UI input panel-body_text_item">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="card[cvc]"
                                maxLength="3"
                                placeholder="CVC"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "bank-tab" ? "active show" : ""
                    }`}
                    id="bank-method-tab"
                    role="tabpanel"
                    aria-labelledby="bank-tab"
                  >
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="UI search panel-body_text">
                            <label>Account Holder Name</label>
                            <div className="UI input panel-body_text_item">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="account[holdername]"
                                value=""
                                required=""
                                maxLength="64"
                                placeholder="Enter Your Full Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="UI search panel-body_text">
                            <label>Account Number</label>
                            <div className="UI input panel-body_text_item">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="account[number]"
                                maxLength="10"
                                placeholder="Enter Account Number"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="panel-body_text">
                            <label>Bank Name</label>
                            <Select
                              showSearch
                              style={{ width: "100%", height: 40 }}
                              placeholder="State Bank of India"
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.children
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                            >
                              <Option value="">State Bank of India</Option>
                              <Option value="1">Indian Bank</Option>
                              <Option value="2">ICICI Bank</Option>
                              <Option value="3">HDFC Bank</Option>
                              <Option value="4">Yes Bank</Option>
                              <Option value="5">Oriental Bank</Option>
                              <Option value="6">Punjab National Bank</Option>
                            </Select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="UI search panel-body_text">
                            <label>IFSC Code</label>
                            <div className="UI input panel-body_text_item">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="IFSC[code]"
                                maxLength="10"
                                placeholder="Enter IFSC Code"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "paypal-tab" ? "active show" : ""
                    }`}
                    id="paypal-method-tab"
                    role="tabpanel"
                    aria-labelledby="paypal-tab"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <p className="t-body">
                          After payment via PayPal's secure checkout, we will
                          send you a link to download your files.
                        </p>
                        <div className="media">
                          <div className="media__item -align-center">
                            <p className="media__item_small">PayPal accepts</p>
                          </div>
                          <div className="media__body">
                            <ul
                              id="paypal-gateway"
                              className="financial-institutes"
                            >
                              <li className="financial-institutes__logo">
                                <img
                                  alt="Visa"
                                  title="Visa"
                                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-1.svg"
                                />
                              </li>
                              <li className="financial-institutes__logo">
                                <img
                                  alt="MasterCard"
                                  title="MasterCard"
                                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-2.svg"
                                />
                              </li>
                              <li className="financial-institutes__logo">
                                <img
                                  alt="American Express"
                                  title="American Express"
                                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-3.svg"
                                />
                              </li>
                              <li className="financial-institutes__logo">
                                <img
                                  alt="Discover"
                                  title="Discover"
                                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-4.svg"
                                />
                              </li>
                              <li className="financial-institutes__logo">
                                <img
                                  alt="China UnionPay"
                                  title="China UnionPay"
                                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-5.svg"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chckout_order_dt">
                  <div className="checkout_title">
                    <h4>Order Details</h4>
                    <img src={line} alt="" />
                  </div>
                  <div className="order_dt_section">
                    {items.map((item) => (
                      <div className="order_title">
                        <h4>{item.titilecourse}</h4>
                        <div className="order_price">${item.price}</div>
                      </div>
                    ))}
                    <div className="order_title">
                      <h6>Discount</h6>
                      <div className="order_price">${discountPriceRounded}</div>
                    </div>
                    <div className="order_title">
                      <h4>Total</h4>
                      <div className="order_price">${total}</div>
                    </div>
                    <Link to="/invoice_page">
                      <button className="chckot_btn" type="submit">
                        Confirm Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="checkout_chk_bg stickytime">
                <div className="checkout_title">
                  <h4>Order Summary</h4>
                  <img src={line} alt="" />
                </div>
                {items ? (
                  <div className="order_dt_section">
                    <div className="order_title">
                      {(items.length > 1 || !items.length) && (
                        <h4>Original Price</h4>
                      )}
                      {items.length == 1 && <h4>{items[0].titilecourse}</h4>}
                      <div className="order_price">${originalPrice}</div>
                    </div>
                    <div className="order_title">
                      <h6>Discount</h6>
                      <div className="order_price">${discountPriceRounded}</div>
                    </div>
                    <div className="order_title">
                      <h2>Total</h2>
                      <div className="order_price5">${total}</div>
                    </div>
                    <div className="scr_text">
                      <FontAwesomeIcon
                        icon={faLock}
                        style={{
                          marginRight: 5,
                        }}
                      />{" "}
                      Secure checkout
                    </div>
                  </div>
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout_Page;
