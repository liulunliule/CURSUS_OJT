import React, { useEffect } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Logo_dark } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddr } from "../../redux/features/checkoutSlice";
import { fetchShoppingCart } from "../../redux/features/shoppingCartSlice";

const Invoice_Page = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.user.account);
  const userId = account.id;
  const { addr, order, status, error } = useSelector((state) => state.checkout);
  const items = useSelector((state) => state.shoppingCart.items);
  const parsePrice = (price) => parseFloat(price);

  const calculateDiscount = (price) => (parsePrice(price) * 0.2).toFixed(2);
  const calculateTotalAmount = (price) =>
    (parsePrice(price) + parseFloat(calculateDiscount(price))).toFixed(2);
  const totalDiscount = items
    .reduce((sum, item) => sum + parseFloat(calculateDiscount(item.price)), 0)
    .toFixed(2);
  const totalAmount = items
    .reduce(
      (sum, item) => sum + parseFloat(calculateTotalAmount(item.price)),
      0
    )
    .toFixed(2);

  useEffect(() => {
    dispatch(fetchShoppingCart(userId));
    dispatch(fetchAddr(userId));
  }, [dispatch]);
  return (
    <div className="invoice">
      <div className="invoice_header ">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="invoice_header_main">
                <div className="invoice_header_item">
                  <div className="invoice_logo">
                    <Link to="/">
                      <img src={Logo_dark} alt="" />
                    </Link>
                  </div>
                  <p>Invoice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="invoice_main_body">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-8">
              <div class="invoice_body">
                <div class="invoice_date_info">
                  <ul>
                    <li>
                      <div class="invoice_date_info_list">
                        <span>Date :</span>
                        10 April 2020
                      </div>
                    </li>
                    <li>
                      <div class="invoice_date_info_list">
                        <span>Invoice No :</span>IVIP12023598
                      </div>
                    </li>
                    <li>
                      <div class="invoice_date_info_list">
                        <span>Order ID :</span>
                        1258963487
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="invoice_dts">
                  <div class="row">
                    <div class="col-md-12">
                      <h2 class="invoice_title">Invoice</h2>
                    </div>
                    <div class="col-sm-6">
                      <div class="invoice_title_item">
                        <h4>To</h4>
                        <ul>
                          <li>
                            <div class="invoice_date_info_list">
                              {addr.userName}
                            </div>
                          </li>
                          <li>
                            <div class="invoice_date_info_list">
                              {addr.Address1}
                              <br /> {addr.Address2}
                            </div>
                          </li>
                          <li>
                            <div class="invoice_date_info_list">
                              {addr.City}
                              <br />
                              {addr.State}
                            </div>
                          </li>
                          <li>
                            <div class="invoice_date_info_list">
                              {addr.ZipCode}
                            </div>
                          </li>
                          <li>
                            <div class="invoice_date_info_list">
                              {addr.Country}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="invoice_title_item">
                        <h4>Cursus</h4>
                        <ul>
                          <li>
                            <div class="invoice_date_info_list">Cursus LTD</div>
                          </li>
                          <li>
                            <div class="invoice_date_info_list">
                              #1234, Shahid karnail Singh Nagar,
                            </div>
                          </li>
                          <li>
                            <div class="invoice_date_info_list">
                              Near MBD Mall,
                            </div>
                          </li>
                          <li>
                            <div class="invoice_date_info_list">141001</div>
                          </li>
                          <li>
                            <div class="invoice_date_info_list">Ludhiana </div>
                          </li>
                          <li>
                            <div class="invoice_date_info_list">Punjab </div>
                          </li>
                          <li>
                            <div class="invoice_date_info_list">India </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="invoice_table">
                  <div>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Item</th>
                          <th scope="col">Price</th>
                          <th scope="col">Discount</th>
                          <th scope="col">Total Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item) => (
                          <tr>
                            <th scope="row">
                              <div class="user_dt_trans">
                                <p>{item.titilecourse}</p>
                              </div>
                            </th>
                            <td>
                              <div class="user_dt_trans">
                                <p>${parsePrice(item.price).toFixed(2)}</p>
                              </div>
                            </td>
                            <td>
                              <div class="user_dt_trans">
                                <p>${calculateDiscount(item.price)}</p>
                              </div>
                            </td>
                            <td>
                              <div class="user_dt_trans">
                                <p>${calculateTotalAmount(item.price)}</p>
                              </div>
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td colspan="1"></td>
                          <td colspan="3">
                            <div class="user_dt_trans total">
                              <div class="invoice_total">
                                Invoice Total : USD ${totalAmount}
                              </div>
                              <p>Total Discount : USD ${totalDiscount}</p>
                              <p>Paid via Paypal</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="invoice_footer">
                  <div class="leftfooter">
                    <p>Thanks for buying.</p>
                  </div>
                  <div class="righttfooter">
                    <a class="print_btn" href="javascript:window.print();">
                      Print
                    </a>
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

export default Invoice_Page;
