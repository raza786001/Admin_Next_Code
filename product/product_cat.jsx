import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Select2 from "react-select2-wrapper";
import { useHistory } from "react-router-dom";

import $ from "jquery";

let SlideToggle;
const ProductCategory = (props) => {
  const [isCatValid, setIsCatValid] = useState(false);
  const [isSubCatValid, setIsSubCatValid] = useState(false);
  const [isDescValid, setIsDescValid] = useState(false);
  const [mainData, setMainData] = useState([]);
  const router = useRouter();

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
  const [values, setValues] = useState({
    category: "",
    subCategory: "",
    description: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmFhYTczMjFhZjI2YTAwNTBlNjA3MSIsImNyZWF0ZWRBdCI6IjIwMjItMDctMDZUMDc6MzY6NDguOTc1WiIsImlhdCI6MTY1NzA5MzAwOCwiZXhwIjoxNjU5Njg1MDA4fQ.vH2AVIaQp1GGIUtRT9KEWEvLB8wDgwDEcNJg4GbBrB0"
    );

    var raw = JSON.stringify({
      category: values.category,
      subCategory: values.subCategory,
      description: values.description,
    });

    try {
      fetch("https://apis-paymax.herokuapp.com/productmgt/category/create", {
        method: "POST",
        headers: myHeaders,
        body: raw,
        // redirect: "follow",
      })
        .then((response) => response.json())
        .then((data) => {
          if (values.description.length < 51) {
            setIsDescValid(true);
            console.log("Description Error");
          } else {
            setIsDescValid(false);
          }

          if (values.subCategory.length < 1) {
            setIsSubCatValid(true);
            console.log("Sub Category Error");
          } else {
            setIsSubCatValid(false);
          }

          if (values.category.length < 1 || data.httpStatusCode === 409) {
            setIsCatValid(true);
            console.log("Category Error");
          } else {
            setIsCatValid(false);
          }

          if (data.success === false) {
            return;
          }

          if (data.success === true) {
            setIsCatValid(false);
            setIsDescValid(false);
            setIsSubCatValid(false);

            router.push("/product_cat");

            console.log(data);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmFhYTczMjFhZjI2YTAwNTBlNjA3MSIsImNyZWF0ZWRBdCI6IjIwMjItMDctMDZUMDc6MzY6NDguOTc1WiIsImlhdCI6MTY1NzA5MzAwOCwiZXhwIjoxNjU5Njg1MDA4fQ.vH2AVIaQp1GGIUtRT9KEWEvLB8wDgwDEcNJg4GbBrB0"
    );

    try {
      fetch("https://apis-paymax.herokuapp.com/productmgt/category/all", {
        method: "GET",
        headers: myHeaders,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMainData(data.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [submitHandler]);

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
              <h4>Product Category </h4>
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
                      Product Category
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#unit" data-bs-toggle="tab" class="nav-link">
                      Unit of Measure
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#Supplier" data-bs-toggle="tab" class="nav-link">
                      Supplier
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#brand" data-bs-toggle="tab" class="nav-link">
                      Product Brands
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
                                        <th>Main Category</th>
                                        <th>Sub Category</th>
                                        <th>Description</th>

                                        <th className="text-right">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {mainData.map((md) => {
                                        return (
                                          <tr>
                                            <td>{md.category}</td>
                                            <td>
                                              {md.subCategory
                                                ? md.subCategory
                                                : ""}
                                            </td>
                                            <td>{md.description}</td>
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
                                        );
                                      })}
                                    </tbody>
                                  </table>

                                  {/* <tr>
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
                                      </tr> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" id="unit" class="tab-pane fade">
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
                                    <i className="fas fa-plus"> </i> Add UoM
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
                  <div role="tabpanel" id="brand" class="tab-pane fade">
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
                                    <i className="fas fa-plus"> </i> Add Brand
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
                  <div role="tabpanel" id="Supplier" class="tab-pane fade">
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
                                    Supplier
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
                        <form class="needs-validation" novalidate>
                          <div className="form-group">
                            <label for="validationCustom01" class="form-label">
                              Category
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Category Name"
                              id="validationCustom01"
                              className="form-control"
                              style={{ borderColor: !isCatValid ? "" : "red" }}
                              value={values.category}
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  category: e.target.value,
                                })
                              }
                              required
                            />
                            {isCatValid && (
                              <section style={{ color: "red" }}>
                                Category can not be empty nor repeated.
                              </section>
                            )}
                          </div>
                          <div className="form-group">
                            <label for="validationCustom02" class="form-label">
                              Sub-Category
                            </label>
                            <input
                              type="text"
                              id="validationCustom02"
                              style={{
                                borderColor: !isSubCatValid ? "" : "red",
                              }}
                              placeholder="Enter Sub Category Name"
                              className="form-control"
                              value={values.subCategory}
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  subCategory: e.target.value,
                                })
                              }
                              required
                            />
                            {isSubCatValid && (
                              <section style={{ color: "red" }}>
                                SubCategory can not be empty
                              </section>
                            )}
                          </div>
                          <div className="form-group">
                            <label for="validationCustom03" class="form-label">
                              Description
                            </label>
                            <input
                              type="text"
                              id="validationCustom03"
                              style={{ borderColor: !isDescValid ? "" : "red" }}
                              placeholder="Enter Description"
                              className="form-control"
                              value={values.description}
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  description: e.target.value,
                                })
                              }
                              required
                            />
                            {isDescValid && (
                              <section style={{ color: "red" }}>
                                Description can not be less than 50 characters.
                              </section>
                            )}
                          </div>
                          <div className="card bg-white">
                            <div className="card-body">
                              <button
                                type="submit"
                                className="btn btn-primary mr-1"
                                onClick={submitHandler}
                                data-dismiss="modal"
                              >
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
                        </form>
                      </div>
                    </div>
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
    </div>
  );
};
export default ProductCategory;
