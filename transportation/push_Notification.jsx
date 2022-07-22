import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import customers from "../json/customers";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Select2 from "react-select2-wrapper";

import $ from "jquery";

let SlideToggle;

const PushNotification = () => {
  const [date, setDate] = useState(new Date());
  const [typeOptions, setTypeOptions] = useState([
    { id: 1, text: "Select Type" },
    { id: 2, text: "Riders" },
    { id: 3, text: "Drivers" },
  ]);

  useEffect(() => {
    SlideToggle = window.ReactSlideToggle;

    $("#filter_search").click(function () {
      $("#filter_inputs").slideToggle(500);
    });
  }, []);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h4>Push Notification</h4>
            </div>
            <div className="col-auto">
              <a
                className="btn btn-primary mr-1"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <i className="fas fa-plus"> </i> Add Push Notification
              </a>
            </div>
          </div>
        </div>
        <div id="filter_inputs" className="card filter-card">
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label>Category Name</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label>Account</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              {/* <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div> */}
            </div>
          </div>
        </div>

        {/* container */}
        <div className="row">
          <div className="col-xl-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-4">
                    <i className="far fa-file"></i>
                  </span>
                  <div className="dash-count">
                    <div className="dash-title">All Push Notification</div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div
                    className="dropdown text-muted mt-3 mb-0"
                    data-toggle="dropdown"
                  >
                    <span className="text-success mr-1">
                      <i className="fas fa-arrow-up mr-1"></i>2.37%
                    </span>
                    <a
                      href="#"
                      className="btn btn-white btn-sm dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                    >
                      Today
                    </a>
                    <div className="dropdown-menu dropdown-menu-left">
                      <a href="#" className="dropdown-item">
                        This Week
                      </a>
                      <a href="#" className="dropdown-item">
                        This Month
                      </a>
                      <a href="#" className="dropdown-item">
                        Last Month
                      </a>
                      <a href="#" className="dropdown-item">
                        This Year
                      </a>
                    </div>
                  </div>
                  <div className="dash-counts">
                    <p>(Growth Rate)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-4">
                    <i className="far fa-file"></i>
                  </span>
                  <div className="dash-count">
                    <div className="dash-title">Driver</div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div
                    className="dropdown text-muted mt-3 mb-0"
                    data-toggle="dropdown"
                  >
                    <span className="text-success mr-1">
                      <i className="fas fa-arrow-up mr-1"></i>2.37%
                    </span>
                    <a
                      href="#"
                      className="btn btn-white btn-sm dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                    >
                      Today
                    </a>
                    <div className="dropdown-menu dropdown-menu-left">
                      <a href="#" className="dropdown-item">
                        This Week
                      </a>
                      <a href="#" className="dropdown-item">
                        This Month
                      </a>
                      <a href="#" className="dropdown-item">
                        Last Month
                      </a>
                      <a href="#" className="dropdown-item">
                        This Year
                      </a>
                    </div>
                  </div>
                  <div className="dash-counts">
                    <p>(Active #)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-4">
                    <i className="far fa-file"></i>
                  </span>
                  <div className="dash-count">
                    <div className="dash-title">Rider</div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div
                    className="dropdown text-muted mt-3 mb-0"
                    data-toggle="dropdown"
                  >
                    <span className="text-success mr-1">
                      <i className="fas fa-arrow-up mr-1"></i>2.37%
                    </span>
                    <a
                      href="#"
                      className="btn btn-white btn-sm dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                    >
                      Today
                    </a>
                    <div className="dropdown-menu dropdown-menu-left">
                      <a href="#" className="dropdown-item">
                        This Week
                      </a>
                      <a href="#" className="dropdown-item">
                        This Month
                      </a>
                      <a href="#" className="dropdown-item">
                        Last Month
                      </a>
                      <a href="#" className="dropdown-item">
                        This Year
                      </a>
                    </div>
                  </div>
                  <div className="dash-counts">
                    <p>(Inactive)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-center table-hover datatable"
                    id="customerstable"
                  >
                    <thead className="thead-light">
                      <tr>
                        <th>No</th>
                        <th>Sent To</th>
                        <th>Message</th>
                        <th>Sent On</th>

                        <th>Status</th>

                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((item, index) => {
                        let status;
                        if (item.status === "Active") {
                          status = (
                            <div className="btn-group btn-group-sm">
                              <button type="button" className="btn btn-primary">
                                Active
                              </button>
                            </div>
                          );
                        } else {
                          status = (
                            <div className="btn-group btn-group-sm">
                              <button type="button" className="btn btn-info">
                                Inactive
                              </button>
                            </div>
                          );
                        }
                        return (
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fas fa-ellipsis-h" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item">
                                    <i
                                      className="far fa-edit mr-2"
                                      data-toggle="modal"
                                      data-target="#editModal"
                                    ></i>
                                    Edit
                                  </a>

                                  <a className="dropdown-item" href="#">
                                    <i className="far fa-trash-alt mr-2"></i>
                                    Delete
                                  </a>
                                  <Link href="/view-estimate">
                                    <a className="dropdown-item">
                                      <i className="far fa-eye mr-2"></i>
                                      View
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add Edit Expense  Modal */}
        <div className="container demo">
          <div
            className="modal left fade"
            id="editModal"
            tabIndex
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          ></div>
        </div>
        {/* Edit Modal */}
        <div className="container demo">
          <div
            className="modal left fade"
            id="exampleModal"
            tabIndex
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="nav flex-sm-column flex-row">
                    <h4 className="card-title mt-2 ml-4">
                      Add New Push Notification
                    </h4>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label> Send to</label>
                          <Select2
                            className="w-100"
                            data={typeOptions}
                            options={{
                              placeholder: " Select Type",
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label> Push Message</label>
                          <textarea
                            rows="5"
                            cols="5"
                            class="form-control"
                            placeholder="Enter text here"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card bg-white">
                  <div className="card-body">
                    <button type="submit" className="btn btn-primary mr-1">
                      Send
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary mr-1"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
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
export default PushNotification;
