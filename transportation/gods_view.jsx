import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import customers from "../json/customers";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Select2 from "react-select2-wrapper";

import $ from "jquery";

let SlideToggle;

const ManageDocuments = () => {
  const [date, setDate] = useState(new Date());
  const [countryOptions, setcountryOptions] = useState([
    { id: 1, text: "Select Country" },
    { id: 2, text: "Nigeria" },
    { id: 3, text: "Ghana" },
    { id: 4, text: "Lesotho" },
  ]);
  const [cityOptions, setCityOptions] = useState([
    { id: 1, text: "Select City" },
    { id: 2, text: "Epe" },
    { id: 3, text: "Onitsha" },
    { id: 4, text: "Wuse 2" },
  ]);
  const [stateOptions, setStateOptions] = useState([
    { id: 1, text: "Select Sub Category" },
    { id: 2, text: "Lagos" },
    { id: 3, text: "Abuja" },
    { id: 4, text: "Anambra" },
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
              <h4>Drivers Location track on Map</h4>
            </div>
            <div className="col-auto">
              {/* <a
                className="btn btn-primary mr-1"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <i className="fas fa-plus"> </i> Add Documents
              </a> */}
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
                    <div className="dash-title">All</div>
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
                    <div className="dash-title">Active</div>
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
                    <div className="dash-title">Inactive</div>
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
            <div class="row row-sm align-items-center mt-3">
              <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                <button
                  type="button"
                  className="btn btn-block btn-outline-primary active"
                >
                  All
                </button>
              </div>
              <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                <button
                  type="button"
                  className="btn btn-block btn-outline-secondary active"
                >
                  Available
                </button>
              </div>
              <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                <button
                  type="button"
                  className="btn btn-block btn-outline-success active"
                >
                  Ride Started
                </button>
              </div>
              <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                <button
                  type="button"
                  className="btn btn-block btn-outline-warning active"
                >
                  Warning
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6">
            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
              <button
                type="button"
                className="btn btn-block btn-outline-primary active"
              >
                All
              </button>
            </div>
          </div>
          <div className="col-sm-6">Map Here</div>
        </div>
      </div>
    </div>
  );
};
export default ManageDocuments;
