import React, { useState, useEffect } from "react";
import Link from "next/link";
import customers from "../json/customers";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Select2 from "react-select2-wrapper";

import $ from "jquery";

let SlideToggle;

const AccountSetting = () => {
  const [countryOptions, setCountryOptions] = useState([
    { id: 1, text: "Select Country" },
    { id: 2, text: "Nigeria" },
    { id: 3, text: "Ghana" },
    { id: 4, text: "Lesotho" },
  ]);
  const [productOptions, setProductOptions] = useState([
    { id: 1, text: "Select Product" },
    { id: 2, text: "Omo" },
    { id: 3, text: "Garri" },
    { id: 4, text: "Banana" },
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
              <h4>Accounting Setting </h4>
            </div>
          </div>
        </div>
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
          <div class="col-12 col-md-12 col-lg-12 d-flex">
            <div class="card flex-fill bg-white">
              <div class="card-header">
                <ul role="tablist" class="nav nav-pills card-header-pills">
                  <li class="nav-item">
                    <a
                      href="#category"
                      data-bs-toggle="tab"
                      class="nav-link active"
                    >
                      Expense Category
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#expense_account"
                      data-bs-toggle="tab"
                      class="nav-link"
                    >
                      Expense Account
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#charts" data-bs-toggle="tab" class="nav-link">
                      Charts of Account
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#sales_account"
                      data-bs-toggle="tab"
                      class="nav-link"
                    >
                      Sales Account
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#purchase_account"
                      data-bs-toggle="tab"
                      class="nav-link"
                    >
                      Purchase Account
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#payment_terms"
                      data-bs-toggle="tab"
                      class="nav-link"
                    >
                      Payment Terms
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#cost_classification"
                      data-bs-toggle="tab"
                      class="nav-link"
                    >
                      Cost Classification
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="#vat" data-bs-toggle="tab" class="nav-link">
                      VAT / Tax
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content pt-0">
                  <div
                    role="tabpanel"
                    id="category"
                    class="tab-pane fade show active"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="card card-table">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-2">
                                <div className="col-auto ">
                                  <a
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#categoryModal"
                                  >
                                    <i className="fas fa-plus"> </i> Add
                                    Category
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-10">
                                <div className="table-responsive">
                                  <table
                                    className="table table-center table-hover datatable"
                                    id="customerstable"
                                  >
                                    <thead className="thead-light">
                                      <tr>
                                        <th>S/N</th>
                                        <th>Expense Account Name</th>
                                        <th>Expense Channel</th>

                                        <th>Status</th>

                                        <th className="text-right">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
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

                                              <a
                                                className="dropdown-item"
                                                href="#"
                                              >
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
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="tabpanel"
                    id="expense_account"
                    class="tab-pane fade"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="card card-table">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-2">
                                <div className="col-auto ">
                                  <a
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#uomModal"
                                  >
                                    <i className="fas fa-plus"> </i> Add Expense
                                    Account
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-10">
                                <div className="table-responsive">
                                  <table
                                    className="table table-center table-hover datatable"
                                    id="customerstable"
                                  >
                                    <thead className="thead-light">
                                      <tr>
                                        <th>S/N</th>
                                        <th>UoM Name</th>

                                        <th>Status</th>

                                        <th className="text-right">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
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

                                              <a
                                                className="dropdown-item"
                                                href="#"
                                              >
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
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div role="tabpanel" id="charts" class="tab-pane fade">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="card card-table">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-2">
                                <div className="col-auto ">
                                  <a
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#brandModal"
                                  >
                                    <i className="fas fa-plus"> </i> Add Charts
                                    of Account
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-10">
                                <div className="table-responsive">
                                  <table
                                    className="table table-center table-hover datatable"
                                    id="customerstable"
                                  >
                                    <thead className="thead-light">
                                      <tr>
                                        <th>S/N</th>
                                        <th>Name</th>
                                        <th>Account Number</th>
                                        <th>Description</th>
                                        <th>Status</th>

                                        <th className="text-right">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
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

                                              <a
                                                className="dropdown-item"
                                                href="#"
                                              >
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
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" id="vat" class="tab-pane fade">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="card card-table">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-2">
                                <div className="col-auto ">
                                  <a
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#brandModal"
                                  >
                                    <i className="fas fa-plus"> </i> Add VAT
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-10">
                                <div className="table-responsive">
                                  <table
                                    className="table table-center table-hover datatable"
                                    id="customerstable"
                                  >
                                    <thead className="thead-light">
                                      <tr>
                                        <th>S/N</th>
                                        <th>Name</th>
                                        <th>Amount</th>
                                        <th>Status</th>

                                        <th className="text-right">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
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

                                              <a
                                                className="dropdown-item"
                                                href="#"
                                              >
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
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" id="sales_account" class="tab-pane fade">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="card card-table">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-2">
                                <div className="col-auto ">
                                  <a
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#supplierModal"
                                  >
                                    <i className="fas fa-plus"> </i> Add Sales
                                    Account
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-10">
                                <div className="table-responsive">
                                  <table
                                    className="table table-center table-hover datatable"
                                    id="customerstable"
                                  >
                                    <thead className="thead-light">
                                      <tr>
                                        <th>S/N</th>
                                        <th>Name</th>

                                        <th>Status</th>

                                        <th className="text-right">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
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

                                              <a
                                                className="dropdown-item"
                                                href="#"
                                              >
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
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="payment_terms"
                      class="tab-pane fade"
                    >
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card card-table">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-2">
                                  <div className="col-auto ">
                                    <a
                                      className="btn btn-primary"
                                      data-toggle="modal"
                                      data-target="#supplierModal"
                                    >
                                      <i className="fas fa-plus"> </i> Add
                                      Payment Terms
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-10">
                                  <div className="table-responsive">
                                    <table
                                      className="table table-center table-hover datatable"
                                      id="customerstable"
                                    >
                                      <thead className="thead-light">
                                        <tr>
                                          <th>S/N</th>
                                          <th>Name</th>
                                          <th>Terms</th>
                                          <th>Duration</th>
                                          <th>Status</th>

                                          <th className="text-right">
                                            Actions
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
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

                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
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
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="cost_classification"
                      class="tab-pane fade"
                    >
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card card-table">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-2">
                                  <div className="col-auto ">
                                    <a
                                      className="btn btn-primary"
                                      data-toggle="modal"
                                      data-target="#supplierModal"
                                    >
                                      <i className="fas fa-plus"> </i> Add SCost
                                      Classification
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-10">
                                  <div className="table-responsive">
                                    <table
                                      className="table table-center table-hover datatable"
                                      id="customerstable"
                                    >
                                      <thead className="thead-light">
                                        <tr>
                                          <th>S/N</th>
                                          <th>UoM Name</th>

                                          <th>Status</th>

                                          <th className="text-right">
                                            Actions
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
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

                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
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
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  role="tabpanel"
                  id="purchase_account"
                  class="tab-pane fade"
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="card card-table">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-2">
                              <div className="col-auto ">
                                <a
                                  className="btn btn-primary"
                                  data-toggle="modal"
                                  data-target="#supplierModal"
                                >
                                  <i className="fas fa-plus"> </i> Add Purchase
                                  Account
                                </a>
                              </div>
                            </div>
                            <div className="col-md-10">
                              <div className="table-responsive">
                                <table
                                  className="table table-center table-hover datatable"
                                  id="customerstable"
                                >
                                  <thead className="thead-light">
                                    <tr>
                                      <th>S/N</th>
                                      <th>Name</th>

                                      <th>Status</th>

                                      <th className="text-right">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
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

                                            <a
                                              className="dropdown-item"
                                              href="#"
                                            >
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
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for Category - Add */}
      <div className="container demo">
        <div
          className="modal left fade"
          id="categoryModal"
          tabIndex
          role="dialog"
          aria-labelledby="categoryModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="nav flex-sm-column flex-row">
                  <h4 className="card-title mt-2 ml-4">Add New Category</h4>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Expense Account Name</label>
                        <input
                          type="text"
                          placeholder="E.g Cost of goods sold"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Expense Account Channel</label>
                        <input
                          type="text"
                          placeholder="E.g Petty Cash"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-white">
                <div className="card-body">
                  <button type="submit" className="btn btn-primary mr-1">
                    Save
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
      {/* End Modal */}
      {/* Start Modal for UoM Add */}
      <div className="container demo">
        <div
          className="modal left fade"
          id="uomModal"
          tabIndex
          role="dialog"
          aria-labelledby="uomModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="nav flex-sm-column flex-row">
                  <h4 className="card-title mt-2 ml-4">Add New UOM</h4>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        {/* <Select2
                            className="w-100"
                            data={countryOptions}
                            options={{
                              placeholder: " Select Country",
                            }}
                          /> */}
                        <input
                          type="text"
                          placeholder="Enter UOM E.g Kg"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-white">
                <div className="card-body">
                  <button type="submit" className="btn btn-primary mr-1">
                    Save
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
      {/* Start Modal for Supplier */}
      <div className="container demo">
        <div
          className="modal left fade"
          id="supplierModal"
          tabIndex
          role="dialog"
          aria-labelledby="supplierModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="nav flex-sm-column flex-row">
                  <h4 className="card-title mt-2 ml-4">Add New Supplier</h4>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        {/* <Select2
                            className="w-100"
                            data={countryOptions}
                            options={{
                              placeholder: " Select Country",
                            }}
                          /> */}
                        <input
                          type="text"
                          placeholder="Supplier Name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Supplier Company Name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Supplier Address"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Supplier Email"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <Select2
                          className="w-100"
                          data={productOptions}
                          multiple
                          options={{
                            placeholder: " Supplier Products",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-white">
                <div className="card-body">
                  <button type="submit" className="btn btn-primary mr-1">
                    Save
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
      {/* Start Brand Modal */}
      <div className="container demo">
        <div
          className="modal left fade"
          id="brandModal"
          tabIndex
          role="dialog"
          aria-labelledby="brandModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="nav flex-sm-column flex-row">
                  <h4 className="card-title mt-2 ml-4">Add New Brand</h4>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        {/* <Select2
                            className="w-100"
                            data={countryOptions}
                            options={{
                              placeholder: " Select Country",
                            }}
                          /> */}
                        <input
                          type="text"
                          placeholder="Supplier Name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Supplier Company Name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Supplier Address"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Supplier Email"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <Select2
                          className="w-100"
                          data={productOptions}
                          multiple
                          options={{
                            placeholder: " Supplier Products",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-white">
                <div className="card-body">
                  <button type="submit" className="btn btn-primary mr-1">
                    Save
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
  );
};
export default AccountSetting;
